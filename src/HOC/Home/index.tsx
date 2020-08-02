import React, { FC, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import { Sidebar, Section, HeaderApp, ContentApp } from '../../components';
import { DashboardPage, TasksPage } from '../../pages';

const Home: FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => setCollapsed(!collapsed);

    return (
        <Section>
            <Sidebar collapsed={collapsed} />
            <Layout className='site-layout'>
                <HeaderApp toggle={toggle} collapsed={collapsed} />
                <ContentApp>
                    <Switch>
                        <Route exact path='/' component={DashboardPage} />
                        <Route exact path='/tasks' component={TasksPage} />
                    </Switch>
                </ContentApp>
            </Layout>
        </Section>
    );
};

export default Home;
