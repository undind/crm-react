import React from 'react';
import { Route } from 'react-router-dom';

import { SigninPage, SignupPage } from '../../pages';

const Auth = () => (
    <>
        <Route exact path='/signin' component={SigninPage} />
        <Route exact path='/signup' component={SignupPage} />
    </>
);

export default Auth;
