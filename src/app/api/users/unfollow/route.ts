import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();
import { Session } from 'next-auth';

export async function POST(req: NextApiRequest, res: NextApiResponse){
    const session = await getSession({req});
    if(!session || !session.user.email){
           return res.status(400).json({
            message: 'user session has been not found'
        })
    }
    const sessionUserId = parseInt(session.user.id, 10);
    const { followingId } = req.body;
    const follow = await prisma.follows.findUnique({
    where: {
        followerId_followingId: {
            followerId: sessionUserId,
            followingId
        }
    }
    })
    if (!follow) {
        return res.status(400).json({ error: "Not following the user" });
      }
  
      await prisma.follows.delete({
        where: {
          id: follow.id,
        },
      });
  
      return res.status(204).end();
    }
  
    
  

