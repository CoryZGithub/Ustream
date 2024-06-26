// pages/api/users.ts

import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";
import { log } from "console";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    await serverAuth(req);

    const users = await prismadb.user.findMany({
      select: {
        name: true,
        image: true,
        // playbackid: true,
      },
    });
    console.log("This data is from api/users", users);
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
}
