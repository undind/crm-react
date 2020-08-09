import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { SigninPage, SignupPage } from '../../pages';

const Auth: FC = () => (
    <>
        <Route exact path='/signin' component={SigninPage} />
        <Route exact path='/signup' component={SignupPage} />
    </>
);

export default Auth;
