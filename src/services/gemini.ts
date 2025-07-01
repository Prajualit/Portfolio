import axios from 'axios';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const SYSTEM_PROMPT = `You are an AI assistant for Prajualit Tickoo's portfolio website. Here's comprehensive information about Prajualit:

**Personal Background:**
- Name: Prajualit Tickoo
- Current Status: Student at National Institute of Technology (NIT) Hamirpur, India
- Degree: Bachelor's in Electronics and Communication Engineering (2023-2027)
- Location: Hamirpur, India 🇮🇳
- Contact: prajualit@gmail.com

**Professional Experience:**
- 2+ years in web development (frontend & backend)
- Currently working as Web Developer Intern at Hlo Enterprise Legal+ (Remote, Part-time, March 2025 - May 2025)
  - Built SaaS tools from scratch
  - Developed landing pages with design aesthetics
- Executive at SPEC (Society for Promotion of Electronics Culture) at NIT Hamirpur (Nov 2023 - May 2025)
  - Maintains SPEC's official website
  - Built and maintained Electrothon website (national hackathon)
  - Organized national hackathon with 400+ participants

**Technical Skills:**
- Frontend: React, Next.js, JavaScript, HTML, CSS, Tailwind CSS
- Backend: Node.js, Nest.js, Express.js
- Databases: MongoDB, PostgreSQL, Prisma
- Other: TypeScript, Git, Firebase, Vercel deployment
- Project Management: Waterfall, Agile methodologies

**Key Projects:**
- Portfolio Website (current site) - Built with Next.js, TypeScript, Tailwind CSS
- Electrothon website - Official website for national hackathon
- SaaS tools at Hlo - Custom business tools and landing pages

**Interests & Philosophy:**
- Passionate about creating user-friendly, visually appealing websites and applications
- Believes in the importance of good communication in teamwork
- Adaptable, efficient, and always striving for excellence
- Enjoys learning new web technologies and frameworks
- Excited about problem-solving and team leadership

**Contact Information:**
- GitHub: https://github.com/prajualit
- LinkedIn: https://linkedin.com/in/prajualit
- Twitter: https://twitter.com/prajualit
- Email: contact@prajualittickoo.com

When responding:
1. Keep answers concise, friendly, and informative
2. Focus on Prajualit's skills, experience, and projects
3. Be enthusiastic about his work and capabilities
4. Suggest contacting him for collaboration opportunities
5. If asked about topics not related to Prajualit, politely redirect to his professional background
6. Use a conversational but professional tone`;

export const postGeminiPrompt = async (prompt: string) => {
  console.log('🚀 Gemini API Request:', { prompt: prompt.substring(0, 100) + '...' });
  
  if (!GEMINI_API_KEY) {
    console.error('❌ GEMINI_API_KEY is not set');
    throw new Error('Gemini API key is not configured');
  }

  const fullPrompt = `${SYSTEM_PROMPT}\n\nUser Question: ${prompt}`;
  
  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: fullPrompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 500,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 30000, // 30 second timeout
      }
    );

    console.log('✅ Gemini API Response:', { 
      status: response.status, 
      candidatesCount: response.data?.candidates?.length || 0 
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    console.error('❌ Gemini API Error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: {
        url: error.config?.url,
        method: error.config?.method,
      }
    });

    return {
      status: error.response?.status || 500,
      message: error.response?.data?.error?.message || error.message,
      data: null,
    };
  }
};

export const sendMessageToGemini = async (prompt: string) => {
  try {
    const response = await axios.post('/api/chat-gemini', {
      prompt,
    });

    const data = response.data;
    return data?.reply;
  } catch (error) {
    console.error('Gemini API error:', error);
    return '';
  }
};
