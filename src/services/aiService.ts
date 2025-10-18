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
  private togetherApiKey: string;

  constructor() {
    this.groqApiKey = import.meta.env.VITE_GROQ_API_KEY || '';
    this.huggingfaceApiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY || '';
    this.togetherApiKey = import.meta.env.VITE_TOGETHER_API_KEY || '';
  }

  async sendMessage(messages: AIMessage[], attachments?: File[]): Promise<AIResponse> {
    try {
      let context = '';

      if (attachments && attachments.length > 0) {
        for (const file of attachments) {
          if (file.type.startsWith('image/')) {
            context += `\n[Image attached: ${file.name}]\n`;
          } else if (file.type === 'application/pdf') {
            context += `\n[PDF attached: ${file.name}]\n`;
          }
        }
      }

      if (this.groqApiKey && this.groqApiKey !== 'gsk_your_groq_api_key_here') {
        return await this.sendToGroq(messages, context);
      }

      if (this.huggingfaceApiKey && this.huggingfaceApiKey !== 'hf_your_api_key_here') {
        return await this.sendToHuggingFace(messages, context);
      }

      return await this.getFallbackResponse(messages);
    } catch (error) {
      console.error('AI Service Error:', error);
      return {
        content: 'I apologize, but I encountered an error processing your request. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  private async sendToGroq(messages: AIMessage[], context: string): Promise<AIResponse> {
    try {
      const messagesWithContext = context
        ? [
            ...messages.slice(0, -1),
            {
              role: messages[messages.length - 1].role,
              content: messages[messages.length - 1].content + context,
            },
          ]
        : messages;

      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.groqApiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: messagesWithContext,
          temperature: 0.7,
          max_tokens: 2048,
        }),
      });

      if (!response.ok) {
        throw new Error(`Groq API error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        content: data.choices[0]?.message?.content || 'No response from AI',
      };
    } catch (error) {
      console.error('Groq API Error:', error);
      throw error;
    }
  }

  private async sendToHuggingFace(messages: AIMessage[], context: string): Promise<AIResponse> {
    try {
      const lastMessage = messages[messages.length - 1];
      const prompt = context ? lastMessage.content + context : lastMessage.content;

      const response = await fetch(`${HUGGINGFACE_API_URL}mistralai/Mistral-7B-Instruct-v0.2`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.huggingfaceApiKey}`,
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 512,
            temperature: 0.7,
            return_full_text: false,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Hugging Face API error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        content: data[0]?.generated_text || 'No response from AI',
      };
    } catch (error) {
      console.error('Hugging Face API Error:', error);
      throw error;
    }
  }

  private async getFallbackResponse(messages: AIMessage[]): Promise<AIResponse> {
    const lastMessage = messages[messages.length - 1];
    const lowerContent = lastMessage.content.toLowerCase();

    if (lowerContent.includes('hello') || lowerContent.includes('hi')) {
      return {
        content:
          "Hello! I'm SNCOP-AI, your B.Pharmacy study assistant. How can I help you today?",
      };
    }

    if (lowerContent.includes('pharmacy') || lowerContent.includes('medicine')) {
      return {
        content:
          "I can help you with B.Pharmacy topics! Ask me about pharmacology, pharmaceutical chemistry, pharmacognosy, or any other subject you're studying.",
      };
    }

    if (lowerContent.includes('thank')) {
      return {
        content: "You're welcome! Feel free to ask if you have any more questions.",
      };
    }

    return {
      content:
        "I'm here to help with your B.Pharmacy studies! To use my full capabilities, please configure an AI API key in the .env file. You can use free services like:\n\n1. Groq (https://console.groq.com) - Very fast, free tier available\n2. Hugging Face (https://huggingface.co) - Free inference API\n3. Together AI (https://together.ai) - Free tier available\n\nIn the meantime, feel free to ask me general questions about pharmacy topics!",
    };
  }

  async processImageFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async processPDFFile(file: File): Promise<string> {
    return `PDF file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
  }
}

export const aiService = new AIService();
