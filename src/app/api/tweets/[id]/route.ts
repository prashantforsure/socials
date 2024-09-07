import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();
import { Session } from 'next-auth';

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'DELETE') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { id } = req.query;
  
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ message: 'Invalid tweet ID' });
    }
  
    try {
        const session: Session | null = await getSession({req});
  
      if (!session || !session.user) {
        return res.status(401).json({
          message: "User session not found"
        });
      }
  
      const tweetId = parseInt(id, 10);
  
      const tweet = await prisma.tweet.findUnique({
        where: { id: tweetId },
        include: { author: true }
      });
  
      if (!tweet) {
        return res.status(404).json({ message: 'Tweet not found' });
      }
      const sessionUserId = parseInt(session.user.id, 10);

      if (isNaN(sessionUserId)) {
        return res.status(400).json({ message: 'Invalid session user ID' });
      }
  
      if (tweet.author.id !== sessionUserId) {
        return res.status(403).json({ message: "Forbidden: You don't have permission to delete this tweet" });
      }
  
      await prisma.tweet.delete({
        where: { id: tweetId }
      });
  
      return res.status(204).end();
    } catch (error) {
      console.error('Error deleting tweet:', error);
      return res.status(500).json({ message: 'An error occurred while deleting the tweet.' });
    } finally {
      await prisma.$disconnect();
    }
  }