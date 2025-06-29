import { NextApiRequest, NextApiResponse } from 'next';

import { sendMessage } from '@/services/contact';

const FORM_API_KEY = process.env.CONTACT_FORM_API_KEY as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Contact API called with:', req.body);
    
    // Check if API key is configured
    if (!FORM_API_KEY) {
      console.error('CONTACT_FORM_API_KEY environment variable is not set');
      return res.status(500).json({ 
        error: 'Contact form is not properly configured' 
      });
    }

    const { formData } = req.body;

    // Validate required fields
    if (!formData || !formData.name || !formData.email || !formData.message) {
      console.error('Missing required fields:', formData);
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, and message are required' 
      });
    }

    console.log('Form data received:', formData);

    const updatedFormData = new FormData();
    updatedFormData.append('access_key', FORM_API_KEY);

    // Add all form fields to FormData
    for (const key in formData) {
      updatedFormData.append(key, formData[key]);
    }

    // Also add some additional recommended fields
    updatedFormData.append('subject', `New Contact Form Message from ${formData.name}`);
    updatedFormData.append('from_name', formData.name);

    console.log('Sending message to web3forms with access_key:', FORM_API_KEY.substring(0, 8) + '...');
    const response = await sendMessage(updatedFormData);
    
    console.log('Web3forms response:', response);

    res.status(200).json({ 
      status: 200, 
      message: response?.data?.message || 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('Contact API error:', error);
    
    // Return more detailed error information
    if (error instanceof Error) {
      res.status(500).json({ 
        error: 'Failed to send message', 
        details: error.message 
      });
    } else {
      res.status(500).json({ 
        error: 'Something went wrong!', 
        details: 'Unknown error occurred' 
      });
    }
  }
}
