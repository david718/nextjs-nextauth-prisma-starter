import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient();

const options = {
    secret: 'secret',
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
    ],
    pages: {
        signIn: '/signin',
    },
    callbacks: {
        signIn: async ({ user, account, profile }: any) => {
            console.log(user, account, profile, 'try signin');

            try {
                const exitedUser = await prisma.user.findUnique({
                    where: { email: user.email },
                });
                if (exitedUser) {
                    console.log(exitedUser, 'get user');
                    return Promise.resolve(true);
                } else {
                    console.log('create###', user.name, user.email);
                    const createdUser = await prisma.user.create({
                        data: {
                            name: user.name,
                            email: user.email,
                        },
                    });
                    console.log(createdUser, 'created user!');
                    return Promise.resolve(true);
                }
            } catch (e) {
                console.log(e);
                return Promise.reject(true);
            }
        },
    },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, options);
