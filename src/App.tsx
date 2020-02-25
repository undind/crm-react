import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {
    return (
        <Switch>
            <Route to='/signin' component={Signin}></Route>
            <Route to='/signup' component={Signup}></Route>
            <Redirect from='/' to='/signin'></Redirect>
        </Switch>
    );
};

export default App;
