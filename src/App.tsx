import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { Auth, Home } from './HOC';
import { NotFoundPage } from './pages';
import { ErrorBoundary } from './components';
import { userSelectState } from './redux/selectors/users';

import { history } from './history';

const App = () => {
  const token = useSelector((state) => userSelectState(state));

  return (
    <ErrorBoundary>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={['/signin', '/signup']} render={() => (!token ? <Auth /> : <Redirect to='/' />)} />
          <Route
            exact
            path={['/', '/tasks', '/profile']}
            render={() => (token ? <Home /> : <Redirect to='/signin' />)}
          />
          <Route render={() => <NotFoundPage />} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
};

export default App;
