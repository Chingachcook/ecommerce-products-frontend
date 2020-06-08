import React from 'react';
import { Layout, PageHeader } from 'antd';
import 'antd/dist/antd.css';
import './CustomLayout.scss';

const { Header } = Layout;

interface CustomLayoutProps {

}

export const CustomLayout: React.SFC<CustomLayoutProps> = ({ children }) => {
    return (
        <Layout className="layout">
            <Header className="header" style={{ padding: '15px 50px', height: '74px' }}>
                <div className="logo" />
            </Header>
            <PageHeader
                className="site-page-header"
                title="Pizza products"
                style={{ padding: '0 50px', background: '#fff' }}
            />
            <Layout style={{ backgroundColor: '#fff' }}>
                { children }
            </Layout>
        </Layout>
    );
};
