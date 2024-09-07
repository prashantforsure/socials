import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse){
    const { id } = req.query;

 const following = await prisma.follows.findMany({
      where: { followingId: parseInt(id as string, 10) },
      include: {
        following: true,
      },
    });
    return res.status(200).json(following.map(f => f.following));
}