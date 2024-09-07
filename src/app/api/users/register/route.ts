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
export async function Post(req: NextApiRequest, res: NextApiResponse){
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
res.status(400).json({
    error: "user has not been created"
})
}
}