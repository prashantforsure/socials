import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { Session } from 'next-auth';
const prisma = new PrismaClient();


interface Tweettype {
    content: string
}

export async function Post(req: NextApiRequest, res: NextApiResponse){

    try{
const session: Session | null = await getSession({req});
if(!session){
    res.status(400).json({
        message: 'user session has been not found'
    })
}

// @ts-ignore
const email = session.user?.email;

if (!email) {
  return res.status(400).json({ message: 'Email is missing from session.' });
}


const {content} = req.body;

if (!content) {
    return res.status(400).json({ message: 'Tweet content is required.' });
  }

const tweet = await prisma.tweet.create({
    data: {
        content,
        author: { connect: { email: email} },
    }
})
res.status(200).json({
    message: "tweet has been created"
})
    } catch(error){
     message: "something went wrong try again"
    }
}