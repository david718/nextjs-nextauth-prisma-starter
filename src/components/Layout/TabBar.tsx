import React from 'react';

import TabItem from './TabItem';

const TabBar = React.memo(() => {
    return (
        <div className="tabbar-container">
            <TabItem name="home" href="/home" />
            <TabItem name="service" href="/service" />
            <TabItem name="achivement" href="/achivement" />
            <TabItem name="more" href="/more" />
        </div>
    );
});

export default TabBar;
