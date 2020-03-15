import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';

const App = () => {
    return (
        <Switch>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
            <Redirect from="/" to="/home" />
        </Switch>
    );
};

export default App;
