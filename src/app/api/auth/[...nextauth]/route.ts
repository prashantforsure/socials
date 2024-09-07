import NextAuth, {type DefaultSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { prismaClient } from "@/lib/db";

const prisma = new PrismaClient();

declare module "next-auth" {
  interface Session {
      user: {
          id: string
      } & DefaultSession["user"]
  }
}

const handler = NextAuth({
  providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
      })
  ],
  secret: process.env.NEXTAUTH_SECRET ?? "secret",
  callbacks: {
      async signIn(params) {
          if (!params.user.email) {
              return false;
          }

          try {
              const existingUser = await prismaClient.user.findUnique({
                  where: {
                      email: params.user.email
                  }
              })
              if (existingUser) {
                  return true
              }
              await prismaClient.user.create({
                  data: {
                      email: params.user.email,
                      // @ts-ignore
                      provider: "Google"
                  } 
              })
              return true;
           } catch(e) {
              console.log(e);
              return false;
           }
      },
      // @ts-ignore
      async session({session}) {
          const dbUser = await prismaClient.user.findUnique({
              where: {
                  email: session.user.email as string
              }
          })
          if (!dbUser) {
              return session;
          }
          return {
              ...session, 
              user: {
                  id: dbUser.id
              }
          }
      }
  }
})

export { handler as GET, handler as POST }