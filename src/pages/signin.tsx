import { providers, signIn } from 'next-auth/client';
import { NextPageContext, InferGetServerSidePropsType } from 'next';

import { SPageTitle } from 'src/style/components';
import SLoginButton from 'src/style/components/SLoginButton';

export default function SignIn({
    providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const handleLogin = (id: string) => async () => {
        await signIn(id, { callbackUrl: 'http://localhost:3000' });
    };

    return (
        <>
            <div className="flex-center padding-top-200">
                <SPageTitle>로그인 페이지</SPageTitle>
            </div>
            <div className="flex-center margin-top-16">
                {Object.values(providers).map((provider: any) => {
                    return (
                        <div key={provider.name} className="margin-top-16">
                            <SLoginButton onClick={handleLogin(provider.id)}>
                                {provider.name}으로 시작하기
                            </SLoginButton>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export const getServerSideProps = async ({ req }: NextPageContext) => {
    console.log(req && req.statusCode);
    return {
        props: {
            providers: await providers(),
        },
    };
};
