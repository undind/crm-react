import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { ErrorBoundary } from './components';

import { history } from './history';

const App = () => {
    return (
        <ErrorBoundary>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path='/signin' component={Signin} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/' component={Home} />
                    <Redirect to='/' />
                </Switch>
            </ConnectedRouter>
        </ErrorBoundary>
    );
};

export default App;
