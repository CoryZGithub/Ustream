// pages/api/createStream.ts
import { NextApiRequest, NextApiResponse } from "next";
import Mux from "@mux/mux-node";

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID || "",
  process.env.MUX_TOKEN_SECRET || ""
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .send({ error: "Method Not Allowed, only POST requests are accepted." });
  }

  try {
    const liveStream = await Video.LiveStreams.create({
      playback_policy: "public",
      new_asset_settings: { playback_policy: "public" },
      test: false,
      latency_mode: "low",
    });

    res.status(200).json(liveStream);
  } catch (error) {
    console.error("Error creating live stream:", error);
    res.status(500).json({ error: "Error creating live stream." });
  }
}
