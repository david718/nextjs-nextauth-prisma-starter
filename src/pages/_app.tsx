import { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import 'antd/dist/antd.css';
import 'src/style/global.css';

import { Layout } from 'src/components';

const WrappedApp = ({
    Component,
    router,
    pageProps: { session, ...pageProps },
}: AppProps) => {
    console.log(router);
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/sw.js').then(
                    function (registration) {
                        console.log(
                            'Service Worker registration successful with scope: ',
                            registration.scope
                        );
                    },
                    function (err) {
                        console.log(
                            'Service Worker registration failed: ',
                            err
                        );
                    }
                );
            });
        }
    }, []);

    return (
        <>
            <Head>
                <link rel='shortcut icon' href='/static/favicon.ico' />
                <script
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=G-P0Q0CKJBYM'
                ></script>
                <script
                    type='text/javascript'
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-P0Q0CKJBYM');`,
                    }}
                />
            </Head>
            {['/signin'].includes(router.pathname) ? (
                <Component {...pageProps} />
            ) : (
                <SessionProvider session={session}>
                    <Layout pathname={router.pathname}>
                        <Component {...pageProps} />
                    </Layout>
                </SessionProvider>
            )}
        </>
    );
};

export default WrappedApp;
