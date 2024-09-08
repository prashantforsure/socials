import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse){
    const { id } = req.query;
    const tweets = await prisma.tweet.findMany({
        where: { authorId: parseInt(id as string, 10) },
        include: {
          author: true,
          likes: true,
          retweets: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
  
      return res.status(200).json(tweets);
    }
  
