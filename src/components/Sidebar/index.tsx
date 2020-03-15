import './_sidebar.scss';
import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    CalendarOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

type SidebarTypes = {
    collapsed: boolean
}

const Sidebar: FC<SidebarTypes> = ({ collapsed }) => {
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'sticky',
                top: 0,
                left: 0
            }}
        >
            <div className="logo">
                <h2>REACT CRM</h2>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <UserOutlined />
                            <span>Staff</span>
                        </span>
                    }
                >
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <Menu.Item key="2">
                    <CalendarOutlined />
                    <span>Calendar</span>
                </Menu.Item>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <span>Team</span>
                        </span>
                    }
                >
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9"></Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
