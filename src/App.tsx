import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {
    return (
        <Switch>
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
            <Redirect from='/' to='/signin' />
        </Switch>
    );
};

export default App;
