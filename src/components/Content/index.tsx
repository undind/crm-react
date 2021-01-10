import React, { FC } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const ContentApp: FC = ({ children }) => {
  return (
    <Content
      className='site-layout-background'
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
      }}
    >
      {children}
    </Content>
  );
};

export default ContentApp;
