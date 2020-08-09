import React from 'react';
import { Menu, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined, CommentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const notificationMenu = (
    <Menu>
        <Menu.ItemGroup title='You have 2 notifications'>
            <Menu.Item>
                <Link to='/home'>
                    <UserOutlined /> New user registration
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/home'>
                    <CommentOutlined /> New comments
                </Link>
            </Menu.Item>
        </Menu.ItemGroup>
        <Menu.Item className='view-all__link'>
            <Link to='/home'>View all notifications</Link>
        </Menu.Item>
    </Menu>
);

export const messageMenu = (
    <Menu>
        <Menu.ItemGroup title='You have 5 message'>
            <Menu.Item>
                <Link to='/home'>
                    <div className='message-data'>
                        <div className='data-name'>
                            <Avatar size='small' icon={<UserOutlined />} /> Nick
                        </div>
                        <div className='data-date'>yesterday</div>
                    </div>
                    <div>
                        <CommentOutlined /> Hello! We need some help! If you can ...
                    </div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/home'>
                    <div className='message-data'>
                        <div className='data-name'>
                            <Avatar size='small' icon={<UserOutlined />} /> Nick
                        </div>
                        <div className='data-date'>yesterday</div>
                    </div>
                    <div>
                        <CommentOutlined /> Hello
                    </div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/home'>
                    <div className='message-data'>
                        <div className='data-name'>
                            <Avatar size='small' icon={<UserOutlined />} /> Nick
                        </div>
                        <div className='data-date'>yesterday</div>
                    </div>
                    <div>
                        <CommentOutlined /> Hello
                    </div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/home'>
                    <div className='message-data'>
                        <div className='data-name'>
                            <Avatar size='small' icon={<UserOutlined />} /> Nick
                        </div>
                        <div className='data-date'>yesterday</div>
                    </div>
                    <div>
                        <CommentOutlined /> Hello
                    </div>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/home'>
                    <div className='message-data'>
                        <div className='data-name'>
                            <Avatar size='small' icon={<UserOutlined />} /> Nick
                        </div>
                        <div className='data-date'>yesterday</div>
                    </div>
                    <div>
                        <CommentOutlined /> Hello
                    </div>
                </Link>
            </Menu.Item>
        </Menu.ItemGroup>
        <Menu.Item className='view-all__link'>
            <Link to='/home'>View all messages</Link>
        </Menu.Item>
    </Menu>
);

export const accountMenu = (
    <Menu>
        <Menu.ItemGroup title='Account settings'>
            <Menu.Item>
                <Link to='/profile'>
                    <UserOutlined /> Profile
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/signin'>
                    <LogoutOutlined /> Logout
                </Link>
            </Menu.Item>
        </Menu.ItemGroup>
    </Menu>
);
