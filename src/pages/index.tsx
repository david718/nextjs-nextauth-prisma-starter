import {
    NextPage,
    GetServerSideProps,
    InferGetServerSidePropsType,
} from 'next';
import { getSession, signOut } from 'next-auth/react';

import { Button } from 'src/components/Atoms';

const Page: NextPage = ({
    user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const handleLogout = async () => {
        await signOut();
    };
    return (
        <div>
            <div>Hello {user.name}</div>
            <div>
                <Button onClick={handleLogout}>LOG OUT</Button>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session: any = await getSession({ req });
    console.log(session);
    if (session) {
        return {
            props: { user: session.user },
        };
    } else {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }
};

export default Page;
