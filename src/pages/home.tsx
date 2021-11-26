import {
    NextPage,
    GetServerSideProps,
    InferGetServerSidePropsType,
} from 'next';
import { getSession } from 'next-auth/react';

const Page: NextPage = ({
    user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            <div>Hello {user.email}</div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session: any = await getSession({ req });
    if (session) {
        return {
            props: { user: session.user },
        };
    }

    return {
        redirect: {
            destination: '/signin',
            permanent: false,
        },
    };
};

export default Page;
