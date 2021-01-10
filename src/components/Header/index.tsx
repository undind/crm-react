import './_header.scss';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown, Layout, Badge } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  NotificationOutlined,
  MailOutlined,
} from '@ant-design/icons';

import { messageMenu, notificationMenu, accountMenu } from './components';

const { Header } = Layout;

type HeaderTypes = {
  collapsed: boolean;
  toggle: () => void;
};

const HeaderApp: FC<HeaderTypes> = ({ collapsed, toggle }) => {
  const dispatch = useDispatch();

  return (
    <Header className='site-layout-background sidebar__header' style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
      <div className='header-menu'>
        <Dropdown overlay={notificationMenu} placement='bottomRight'>
          <a className='ant-dropdown-link notification-link' href='# ' onClick={(e) => e.preventDefault()}>
            <Badge count={2} offset={[8, -5]} overflowCount={9}>
              <NotificationOutlined />
            </Badge>
          </a>
        </Dropdown>
        <Dropdown overlay={messageMenu} placement='bottomRight'>
          <a className='ant-dropdown-link notification-link' href='# ' onClick={(e) => e.preventDefault()}>
            <Badge count={5} offset={[8, -5]} overflowCount={9}>
              <MailOutlined />
            </Badge>
          </a>
        </Dropdown>
        <Dropdown overlay={accountMenu(dispatch)} placement='bottomRight'>
          <a className='ant-dropdown-link' href='# ' onClick={(e) => e.preventDefault()}>
            Antonov S. <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderApp;
