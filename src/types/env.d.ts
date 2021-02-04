declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DATABASE_URL: string;
            NEXTAUTH_URL: string;
            NEXT_PUBLIC_API_SERVER_URL: string;
            JWT_SECRET_KEY: string;
            GOOGLE_ID: string;
            GOOGLE_SECRET: string;
            FACEBOOK_ID: string;
            FACEBOOK_SECRET: string;
            NEXT_PUBLIC_KAKAO_REST_KEY: string;
            NEXT_PUBLIC_KAKAO_REDIRECT_URI: string;
            GA_APP_ID: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
        }
    }
}
export {};
