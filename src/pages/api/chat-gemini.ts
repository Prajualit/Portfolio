import { NextApiRequest, NextApiResponse } from 'next';

import { postGeminiPrompt } from '@/services/gemini';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = await postGeminiPrompt(prompt);

    if (response?.status >= 400) {
      res.status(response?.status).json({ error: response?.message });
    } else {
      const reply = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!reply) {
        return res.status(500).json({ error: 'No response from Gemini' });
      }
      
      res.status(200).json({ reply });
    }
  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
