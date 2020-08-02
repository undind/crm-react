import './_sidebar.scss';
import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    TeamOutlined,
    AppstoreOutlined,
    BarChartOutlined,
    PoundCircleOutlined,
    SettingOutlined,
    DashboardOutlined,
    MessageOutlined,
    FormOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

type SidebarTypes = {
    collapsed: boolean;
};

const Sidebar: FC<SidebarTypes> = ({ collapsed }) => {
    return (
        <Sider
            trigger={null}
            width='220px'
            collapsible
            collapsed={collapsed}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'sticky',
                top: 0,
                left: 0,
            }}
        >
            <div className='logo'>
                <h2>REACT CRM</h2>
            </div>
            <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                <Menu.Item key='dash' icon={<DashboardOutlined />}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key='tasks' icon={<FormOutlined />}>
                    Tasks
                </Menu.Item>
                <Menu.Item key='mess' icon={<MessageOutlined />}>
                    Messages
                </Menu.Item>
                <SubMenu
                    key='sub1'
                    title={
                        <span>
                            <UserOutlined />
                            <span>Employees</span>
                        </span>
                    }
                >
                    <Menu.Item key='3'>Tom</Menu.Item>
                    <Menu.Item key='4'>Bill</Menu.Item>
                    <Menu.Item key='5'>Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                    key='sub2'
                    title={
                        <span>
                            <TeamOutlined />
                            <span>Clients</span>
                        </span>
                    }
                >
                    <Menu.Item key='6'>Client 1</Menu.Item>
                    <Menu.Item key='8'>Client 2</Menu.Item>
                </SubMenu>
                <SubMenu
                    key='sub3'
                    title={
                        <span>
                            <AppstoreOutlined />
                            <span>Overview</span>
                        </span>
                    }
                >
                    <Menu.Item key='9'>Summary</Menu.Item>
                    <Menu.Item key='10'>Bookings</Menu.Item>
                    <Menu.Item key='11'>Events</Menu.Item>
                </SubMenu>
                <SubMenu
                    key='sub4'
                    title={
                        <span>
                            <BarChartOutlined />
                            <span>Analitics</span>
                        </span>
                    }
                >
                    <Menu.Item key='12'>Service</Menu.Item>
                    <Menu.Item key='13'>Clients</Menu.Item>
                    <Menu.Item key='14'>Daily report</Menu.Item>
                </SubMenu>
                <SubMenu
                    key='sub5'
                    title={
                        <span>
                            <PoundCircleOutlined />
                            <span>Finances</span>
                        </span>
                    }
                >
                    <Menu.Item key='15'>Documents</Menu.Item>
                    <Menu.Item key='16'>Payment transactions</Menu.Item>
                    <Menu.Item key='17'>Events</Menu.Item>
                </SubMenu>
                <SubMenu
                    key='sub6'
                    title={
                        <span>
                            <SettingOutlined />
                            <span>Settings</span>
                        </span>
                    }
                >
                    <Menu.Item key='18'>General</Menu.Item>
                    <Menu.Item key='19'>Titles</Menu.Item>
                    <Menu.Item key='20'>Users</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
