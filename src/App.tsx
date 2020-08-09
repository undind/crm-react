import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { Auth, Home } from './HOC';
import { NotFoundPage } from './pages';
import { ErrorBoundary } from './components';

import { history } from './history';

const App = () => {
    return (
        <ErrorBoundary>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path={['/signin', '/signup']} component={Auth} />
                    <Route exact path={['/', '/tasks', '/profile']} component={Home} />
                    <Route render={() => <NotFoundPage />} />
                </Switch>
            </ConnectedRouter>
        </ErrorBoundary>
    );
};

export default App;
