import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();

export async function Post(req: NextApiRequest, res: NextApiResponse){
const session = await getSession({req});
if(!session){
    res.status(400).json({
        message: 'user session has been not found'
    })
}
}