import React, { FC } from 'react';
import { Layout } from 'antd';

const Section: FC = ({ children }) => {
    return <Layout style={{ minHeight: '100vh' }}>{children}</Layout>;
};

export default Section;
