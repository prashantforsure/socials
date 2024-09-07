import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse){
    try{
const tweet = await prisma.tweet.findMany({
    include: {
        author: true,
        likes: true,
        retweets: true
    }
})
res.status(200).json({
    tweet
})
    } catch(error){
        console.error('Error creating tweet:', error);
        res.status(500).json({ message: 'An error occurred while geting the tweets.' });
    }
}