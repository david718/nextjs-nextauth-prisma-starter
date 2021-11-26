import { memo, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import { Button, Badge, Popover, Avatar } from 'antd';
import { BellOutlined, LogoutOutlined, LeftOutlined } from '@ant-design/icons';

type PopoverItemProps = {
    href: string;
    content: string;
};

const PopoverItem = memo(({ href, content }: PopoverItemProps) => {
    return (
        <div className='pop-over-item-container'>
            <Link href={href}>
                <a className='color-a8a8a8'>{content}</a>
            </Link>
        </div>
    );
});

type HeaderProps = {
    datas: any[];
};

const Header = memo(({ datas }: HeaderProps) => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';
    const [visible, setVisible] = useState(false);

    console.log(loading);
    const handleVisibleChange = (visible: boolean) => {
        setVisible(visible);
    };
    const handleClose = () => setVisible(false);
    const handleLogout = async () => {
        console.log(loading, 'log out!');
        await signOut({ callbackUrl: process.env.NEXTAUTH_URL + '/signin' });
    };
    const handleGoBack = () => {
        Router.back();
    };

    const notiContent = (
        <div className='header-noti-container'>
            {datas.length === 0 ? (
                '새로운 알림이 없습니다'
            ) : (
                <div>
                    {datas.map((data, i) => {
                        if (i < 6) {
                            return (
                                <PopoverItem
                                    key={data.id}
                                    href={`${process.env.MODEL_MANAGE_PATH}/${data.modelId}`}
                                    content={`${'fd'} is ${'fd'}`}
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                    {datas.length < 6 ? null : (
                        <Link href='/notification'>
                            <a onClick={handleClose}>...more</a>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );

    return (
        <div className='header-contrainer'>
            <Button
                type='text'
                icon={<LeftOutlined />}
                onClick={handleGoBack}
            />
            <div>
                <Button
                    className='margin-right-8'
                    shape='circle'
                    icon={<LogoutOutlined />}
                    onClick={handleLogout}
                />
                <Popover
                    placement='bottomRight'
                    content={notiContent}
                    trigger='click'
                    visible={visible}
                    onVisibleChange={handleVisibleChange}
                >
                    <Badge count={datas.length}>
                        <Button
                            shape='circle'
                            className='margin-right-8'
                            icon={<BellOutlined />}
                        />
                    </Badge>
                </Popover>
                {session && (
                    <Link href='/profile'>
                        <Avatar style={{}}>
                            {((session?.user as any)?.name as any).slice(1)}
                        </Avatar>
                    </Link>
                )}
            </div>
        </div>
    );
});

export default Header;
