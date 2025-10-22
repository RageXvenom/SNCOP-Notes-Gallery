# SNCOP-AI Chat Setup Guide

## Overview
The SNCOP-AI Chat feature allows students to interact with an AI assistant that can help with B.Pharmacy studies. Students can ask questions via text or upload files (images and PDFs) for analysis.

## Features
- User registration and authentication with Supabase
- AI-powered chat interface with support for multiple free AI APIs
- File upload support (images and PDFs)
- Chat history saved per user
- Automatic 30-day cleanup of old messages
- Fully animated and responsive UI with dark/light mode support

## Setting Up AI API Keys

To use the AI chat functionality, you need to configure at least one free AI API key. Here are your options:

### Option 1: Groq (Recommended - Very Fast)
1. Visit https://console.groq.com
2. Sign up for a free account
3. Generate an API key
4. Add to `.env` file:
   ```
   VITE_GROQ_API_KEY=gsk_your_actual_groq_api_key_here
   ```

### Option 2: Hugging Face
1. Visit https://huggingface.co
2. Sign up for a free account
3. Go to Settings > Access Tokens
4. Create a new token
5. Add to `.env` file:
   ```
   VITE_HUGGINGFACE_API_KEY=hf_your_actual_huggingface_api_key_here
   ```

### Option 3: OCR.space (For OCR - Completely Free)
1. Visit https://ocr.space/ocrapi
2. Sign up for a free account
3. Get your free API key
4. Add to `.env` file:
   ```
   VITE_OCR_API_KEY=your_actual_ocr_space_api_key_here
   ```

This API is used to extract text from uploaded images, making it easier to discuss document content with the AI.

## Database Setup

The database tables are automatically created via Supabase migrations:

- **profiles**: Stores user information
- **chat_conversations**: Stores conversation metadata
- **chat_messages**: Stores individual messages

Row Level Security (RLS) is enabled to ensure users can only access their own data.

## Automatic Cleanup

Chat messages older than 30 days are automatically deleted:
- **Database Function**: `delete_old_messages()` runs daily at 2:00 AM UTC
- **Edge Function**: Available at `/functions/v1/cleanup-old-messages` for manual cleanup

## User Flow

1. **Registration**: Students register at `/register` with email, password, and full name
2. **Login**: Students login at `/login`
3. **AI Chat**: After login, students can access `/ai-chat` to:
   - Start new conversations
   - Send text messages
   - Upload images or PDFs
   - View chat history
   - Delete old conversations

## Features Implemented

### Authentication
- Email/password authentication with Supabase
- Protected routes (AI chat requires login)
- Session persistence across page refreshes
- Sign out functionality

### Chat Interface
- Split view with conversations sidebar and chat area
- Real-time message sending and receiving
- File upload with preview
- Markdown rendering for AI responses
- Loading states and error handling
- Mobile-responsive design

### Animations & Effects
- Smooth page transitions with Framer Motion
- Hover effects on all interactive elements
- Glass morphism effects
- Gradient animations
- Message fade-in animations
- Responsive scaling effects

### Dark/Light Mode Support
- All text is readable in both modes
- Proper contrast ratios maintained
- Theme-aware colors for all components

## Security Features

- Row Level Security (RLS) on all database tables
- Users can only access their own data
- Passwords are hashed by Supabase Auth
- API keys are stored in environment variables (never in client code)
- Protected routes prevent unauthorized access

## Fallback Behavior

If no AI API keys are configured, the chat will:
- Respond to basic greetings
- Provide instructions on setting up API keys
- Still save chat history
- Allow file uploads

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **UI**: Tailwind CSS + Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI APIs**: Groq / Hugging Face
- **OCR**: OCR.space (Free)
- **File Handling**: React file upload with type validation

## Troubleshooting

### "No API key configured" message
- Add at least one AI API key to the `.env` file
- Restart the development server after adding keys

### Login/Registration not working
- Check that Supabase credentials are correct in `.env`
- Verify database migrations have been applied
- Check browser console for errors

### Chat history not saving
- Verify user is logged in
- Check RLS policies are properly configured
- Review Supabase dashboard for any errors

### Old messages not being deleted
- Check pg_cron extension is enabled
- Verify the scheduled job is running (check Supabase logs)
- Manually trigger cleanup via Edge Function if needed

## Development

To run the project:
```bash
npm install
npm run dev
```

To build for production:
```bash
npm run build
```

## Support

For issues or questions, contact the developer or check the main README.md file.
