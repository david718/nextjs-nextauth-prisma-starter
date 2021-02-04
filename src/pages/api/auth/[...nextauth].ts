import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';

const options = {
    providers: [
        {
            id: 'kakao',
            name: '카카오톡',
            type: 'oauth',
            version: '2.0',
            scope: 'account_email profile',
            params: { grant_type: 'authorization_code' },
            accessTokenUrl: 'https://kauth.kakao.com/oauth/token',
            authorizationUrl: 'https://kauth.kakao.com/oauth/authorize?response_type=code',
            profileUrl: 'https://kapi.kakao.com/v2/user/me',
            clientId: process.env.KAKAO_REST_KEY,
            profile: (profile: any) => {
                return {
                    id: profile.id,
                    name: profile.properties.nickname,
                    email: profile.kakao_account.email,
                    image: profile.properties.profile_image,
                };
            },
        },
        // Providers.Facebook({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET,
        // }),
        // Providers.Google({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET,
        //     authorizationUrl:
        //         'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
        // }),
    ],
    pages: {
        signIn: '/signin',
    },
    callbacks: {
        signIn: async (user: any, account: any, profile: any) => {
            console.log(user, account, profile, 'try signin');
            try {
                return Promise.resolve(true);
            } catch (e) {
                console.log(e);
                return Promise.reject(true);
            }
        },
        session: async (session: any, user: any) => {
            try {
                console.log(session, '@@@@');
                return Promise.resolve({
                    ...session,
                    user: { ...exitedUser, image: user.picture },
                });
            } catch (e) {
                console.log(e);
                return Promise.reject(true);
            }
        },
    },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
