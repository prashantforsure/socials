import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();
import { Session } from 'next-auth';

export async function POST(req: NextApiRequest, res: NextApiResponse){

try{
    const session = await getSession({req});
if(!session || !session.user.email){
       return res.status(400).json({
        message: 'user session has been not found'
    })
}
const { tweetId } = req.body;

const retweet = await prisma.retweet.create({
    data: {
          user: { connect : { email: session.user.email } },
          tweet: { connect: { id: tweetId } }
    }
})
} catch(error){
    console.error('Error retweet:', error);
      return res.status(500).json({ message: 'An error occurred while retweeting.' });
}
}