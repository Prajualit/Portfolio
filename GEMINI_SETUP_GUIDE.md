# 🆓 Google Gemini API Setup Guide

## Why Gemini?
- **Completely FREE** with generous limits
- **15 requests per minute**
- **1500 requests per day**
- **High quality responses** comparable to GPT-3.5
- **Easy to get API key**

## 🔑 How to Get Your FREE Gemini API Key

### Step 1: Go to Google AI Studio
1. Visit [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account

### Step 2: Create API Key
1. Click **"Create API Key"**
2. Select **"Create API key in new project"** (recommended)
3. Copy your API key immediately

### Step 3: Add to Your Project
1. Open your `.env.local` file
2. Add your key:
```bash
GEMINI_API_KEY=your_actual_api_key_here
```

### Step 4: Test Your Setup
1. Start your development server:
```bash
npm run dev
```

2. Click the chat button and try asking:
   - "What are Prajualit's technical skills?"
   - "Tell me about his projects"
   - "How can I contact him?"

## 🆚 Gemini vs OpenAI Comparison

| Feature | Google Gemini | OpenAI GPT-3.5 |
|---------|---------------|-----------------|
| **Cost** | 🟢 FREE | 🔴 $0.002/1K tokens |
| **Daily Limit** | 🟢 1500 requests | 🔴 Pay per use |
| **Quality** | 🟢 Excellent | 🟢 Excellent |
| **Speed** | 🟢 Fast | 🟢 Fast |
| **Setup** | 🟢 Easy | 🟡 Requires billing |

## 🔧 What I've Implemented

### ✅ Completed Integration:
1. **New Gemini Service** (`src/services/gemini.ts`)
2. **New API Route** (`/api/chat-gemini`)
3. **Updated AI Chat** to use Gemini
4. **Enhanced Error Handling**
5. **Same UI Experience** with free backend

### 🔄 Switching Between Models:
You can easily switch between Gemini and OpenAI by changing the import in `AIChat.tsx`:

**For Gemini (FREE):**
```typescript
import { sendMessageToGemini } from '@/services/gemini';
// Use: sendMessageToGemini(message)
```

**For OpenAI (PAID):**
```typescript
import { sendMessage } from '@/services/chatgpt';
// Use: sendMessage(message)
```

## 🚀 Quick Start

1. **Get your FREE Gemini API key** from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. **Add it to `.env.local`**:
   ```bash
   GEMINI_API_KEY=your_key_here
   ```
3. **Start the server**:
   ```bash
   npm run dev
   ```
4. **Test the chat!** 🎉

## 🔍 Testing Your Integration

Try these test questions:
- "What programming languages does Prajualit know?"
- "Tell me about his current internship"
- "What projects has he worked on?"
- "How can I get in touch with him?"

## 🛡️ Rate Limits & Best Practices

### Gemini Free Limits:
- **15 requests per minute**
- **1500 requests per day**
- **Automatic rate limiting** in our implementation

### Best Practices:
1. **Monitor usage** in Google AI Studio dashboard
2. **Implement caching** for common questions (future enhancement)
3. **Add rate limiting** on frontend (future enhancement)
4. **Graceful error handling** (already implemented)

## 🔧 Troubleshooting

**Common Issues:**

1. **"API key not found"**
   - Check `.env.local` file exists
   - Verify key is copied correctly
   - Restart development server

2. **"Rate limit exceeded"**
   - Wait a minute and try again
   - Check your daily usage in Google AI Studio

3. **"Network error"**
   - Check internet connection
   - Verify API key is valid
   - Check Google AI Studio for service status

## 🎯 Production Deployment

For production (Vercel/Netlify), add the Gemini API key to your environment variables:

1. **Vercel**: Project Settings → Environment Variables
2. **Netlify**: Site Settings → Environment Variables

```bash
GEMINI_API_KEY=your_production_key
```

**You're all set! Enjoy your FREE AI assistant! 🚀**
