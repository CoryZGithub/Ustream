import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { playbackId } = req.query;

  // Replace with actual API call to Mux or your streaming service to get the stream status
  const isLive = await checkStreamStatus(playbackId as string);

  res.status(200).json({ isLive });
}

async function checkStreamStatus(playbackId: string): Promise<boolean> {
  // Simulate a call to check if the stream is live
  // Replace this with the actual implementation
  return true; // or false based on the actual stream status
}
