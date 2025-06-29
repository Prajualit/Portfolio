/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/common/libs/prisma';

type Data = {
  status: boolean;
  data?: any;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ status: false, error: 'Method not allowed' });
  }

  try {
    const response = await prisma.projects.findMany({
      orderBy: {
        updated_at: 'desc'
      }
    });
    res.status(200).json({ status: true, data: response });
  } catch (error) {
    console.error('Projects API Error:', error);
    res.status(500).json({ 
      status: false, 
      error: process.env.NODE_ENV === 'development' ? error : 'Internal server error' 
    });
  }
}
