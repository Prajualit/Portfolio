import { NextApiRequest, NextApiResponse } from 'next';

import { getNowPlaying } from '@/services/spotify';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await getNowPlaying();

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=30',
    );

    return res.status(200).json(response?.data);
  } catch (error) {
    console.error('Spotify API error:', error);
    
    // Return a default "not playing" response when Spotify is not configured
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=30',
    );
    
    return res.status(200).json({
      is_playing: false,
      item: null,
    });
  }
}
