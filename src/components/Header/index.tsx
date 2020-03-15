import React, { FC } from 'react';
import { Layout, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

type HeaderTypes = {
    collapsed: boolean;
    toggle: () => void;
};

const HeaderApp: FC<HeaderTypes> = ({ collapsed, toggle }) => {
    return (
        <Header className="site-layout-background sidebar__header" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle
            })}
            <Button type="link" className="sidebar__logout">
                Logout
            </Button>
        </Header>
    );
};

export default HeaderApp;
