import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    AppstoreFilled,
    AppstoreOutlined,
    HomeFilled,
    HomeOutlined,
    GiftFilled,
    GiftOutlined,
    TrophyFilled,
    TrophyOutlined,
} from '@ant-design/icons';
import { CSSProperties } from 'react';

type TabItemProps = {
    name: string;
    href: string;
};

const TabItem = ({ name, href }: TabItemProps) => {
    const router = useRouter();

    const naviPageList = ['home', 'service', 'achivement'];
    let isSelected: boolean = router.pathname.split('/')[1] === href.split('/')[1];
    if (!naviPageList.includes(router.pathname.split('/')[1])) {
        isSelected = 'more' === href.split('/')[1];
    }

    let icon: any;
    if (isSelected) {
        if (name === 'home') {
            icon = <HomeFilled />;
        } else if (name === 'service') {
            icon = <GiftFilled />;
        } else if (name === 'achivement') {
            icon = <TrophyFilled />;
        } else if (name === 'more') {
            icon = <AppstoreFilled />;
        }
    } else {
        if (name === 'home') {
            icon = <HomeOutlined />;
        } else if (name === 'service') {
            icon = <GiftOutlined />;
        } else if (name === 'achivement') {
            icon = <TrophyOutlined />;
        } else if (name === 'more') {
            icon = <AppstoreOutlined />;
        }
    }

    const iconStyle: CSSProperties = {
        color: isSelected ? '#484848' : '#a8a8a8',
        fontSize: 24,
        textAlign: 'center',
    };
    const iconNameStyle: CSSProperties = {
        color: isSelected ? '#484848' : '#a8a8a8',
        fontSize: 12,
    };

    return (
        <Link href={href}>
            <div className="tabitem-container">
                <div>
                    <div style={iconStyle}>{icon}</div>
                    <div style={iconNameStyle}>{name}</div>
                </div>
            </div>
        </Link>
    );
};

export default TabItem;
