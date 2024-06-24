import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new MongoClient(
    "mongodb+srv://Cory:Chicken123@cluster0.mj5trvk.mongodb.net/test"
  );
  await client.connect();
  const name = Array.isArray(req.query.name)
    ? req.query.name[0]
    : req.query.name;

  const db = client.db("test");
  const object = await db.collection("playbackid").findOne({ name });
  // const db = client.db("test");
  // const users = await db.collection("playbackid").find().toArray();
  console.log("This data is from api/users", object);
  res.status(200).json(object);
}


