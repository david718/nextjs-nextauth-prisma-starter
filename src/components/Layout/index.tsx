import React from 'react';
import TabBar from './TabBar';
import Header from './Header';

const index = ({ children }: any) => {
    return (
        <>
            <Header datas={[]} />
            <div className="children-container">{children}</div>
            <TabBar />
        </>
    );
};

export default index;
