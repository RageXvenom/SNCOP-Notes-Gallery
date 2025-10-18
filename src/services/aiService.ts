export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AIResponse {
  content: string;
  error?: string;
}

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const HUGGINGFACE_API_URL = 'https://api-inference.huggingface.co/models/';

class AIService {
  private groqApiKey: string;
  private huggingfaceApiKey: string;

  constructor() {
    // Read keys from Vite env
    // Keep names unchanged for compatibility with the rest of the app.
    this.groqApiKey = (import.meta as any).env?.VITE_GROQ_API_KEY || '';
    this.huggingfaceApiKey = (import.meta as any).env?.VITE_HUGGINGFACE_API_KEY || '';
  }

  /**
   * Main entry point used by the UI.
   * Chooses a free provider automatically (Groq first, then Hugging Face).
   * DO NOT change this signature – other parts of the app call it.
   */
  async sendMessage(messages: AIMessage[], attachments?: File[]): Promise<AIResponse> {
    try {
      let finalMessages = messages;

      // If files were attached, append a short summary to the latest user message.
      if (attachments && attachments.length > 0) {
        const summary = attachments
          .map((f) => `${f.name} (${(f.size / 1024).toFixed(1)} KB)`)
          .join(', ');
        finalMessages = [
          ...messages.slice(0, -1),
          {
            ...messages[messages.length - 1],
            content:
              messages[messages.length - 1].content +
              `\n\n[Attached files: ${summary}]`,
          },
        ];
      }

      if (this.groqApiKey) {
        return await this.sendToGroq(finalMessages);
      }

      if (this.huggingfaceApiKey) {
        return await this.sendToHuggingFace(finalMessages);
      }

      return {
        content: '',
        error:
          'No free AI provider configured. Please set VITE_GROQ_API_KEY or VITE_HUGGINGFACE_API_KEY in your .env.',
      };
    } catch (error) {
      console.error('AI Service Error:', error);
      return {
        content: 'I apologize, but I encountered an error processing your request. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Groq – chat.completions compatible with OpenAI.
   * Uses a widely-available free model when possible.
   */
  private async sendToGroq(messages: AIMessage[]): Promise<AIResponse> {
    const model =
      (import.meta as any).env?.VITE_GROQ_MODEL ||
      // Safe default; you can override with VITE_GROQ_MODEL in .env
      'llama-3.1-8b-instant';

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.4,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error(`Groq API error (${response.status}): ${text}`);
    }

    const data = await response.json();
    const content =
      data?.choices?.[0]?.message?.content ??
      data?.choices?.[0]?.text ??
      '';

    return { content: String(content) };
  }

  /**
   * Hugging Face Inference API – text generation endpoint.
   * We convert chat turns into a single prompt.
   */
  private async sendToHuggingFace(messages: AIMessage[]): Promise<AIResponse> {
    const model =
      (import.meta as any).env?.VITE_HF_MODEL ||
      'mistralai/Mistral-7B-Instruct-v0.2';

    const prompt = this.composePrompt(messages);

    const response = await fetch(`${HUGGINGFACE_API_URL}${model}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.huggingfaceApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 512,
          temperature: 0.4,
          return_full_text: false,
        },
      }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error(`Hugging Face API error (${response.status}): ${text}`);
    }

    const data = await response.json();
    // HF returns an array of objects with "generated_text"
    const content =
      Array.isArray(data) && data[0]?.generated_text
        ? data[0].generated_text
        : (data?.generated_text ?? '');

    return { content: String(content) };
  }

  private composePrompt(messages: AIMessage[]): string {
    const header =
      'You are a helpful assistant for B.Pharmacy students. Answer clearly and concisely.\n\n';
    const chat = messages
      .map((m) => (m.role === 'user' ? `User: ${m.content}` : `Assistant: ${m.content}`))
      .join('\n');
    return header + chat + '\nAssistant:';
  }

  // Kept for compatibility with the existing UI (if ever used)
  async processImageFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // Kept for compatibility with the existing UI (if ever used)
  async processPDFFile(file: File): Promise<string> {
    return `PDF file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
  }
}

export const aiService = new AIService();
