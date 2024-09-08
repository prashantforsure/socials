import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse){
    const session = await getSession({req});
    if(!session || !session.user.email){
           return res.status(400).json({
            message: 'user session has been not found'
        })
    }
    const { id } = req.query;
    const following = await prisma.follows.findMany({
        where: { followerId: parseInt(id as string, 10) },
        select: { followingId: true },
      });
      
}