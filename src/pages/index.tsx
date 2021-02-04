import { NextPage, GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

const Page: NextPage = () => {
    return <>NOT FOUND</>;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session: any = await getSession({ req });

    if (session) {
        return {
            redirect: {
                destination: '/home',
                permanent: true,
            },
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
