import { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'next-auth/client';

import 'antd/dist/antd.less';
import 'src/style/antd-custom.less';
import 'src/style/global.less';

import { Layout } from 'src/components';

const WrappedApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

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
                        console.log('Service Worker registration failed: ', err);
                    }
                );
            });
        }
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
                />
                <meta name="mobile-web-app-capable" content="yes" />
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-P0Q0CKJBYM"
                ></script>
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-P0Q0CKJBYM');`,
                    }}
                />
            </Head>
            {['/login', '/register', '/signin'].includes(router.pathname) ? (
                <Component {...pageProps} />
            ) : (
                <Provider session={pageProps.session}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            )}
        </>
    );
};

export default WrappedApp;
