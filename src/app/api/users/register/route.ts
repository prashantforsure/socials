import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt';
interface RequestBody {
    email: string;
    password: string;
    name: string;
  }

const prisma = new PrismaClient();
export async function POST(req: NextApiRequest, res: NextApiResponse){
const {email, password, name}: RequestBody = req.body;

const hashedpassword = await bcrypt.hash(password,10);

try{
const user = await prisma.user.create({
    data: {
        email, 
        password: hashedpassword,
        name
    }
})
res.status(201).json(user);
} catch(error){
    console.error('Error creating tweet:', error);
    res.status(500).json({ message: 'An error occurred while creating the user.' });
}
}