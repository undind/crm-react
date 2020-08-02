import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import { generateFormFields } from '../../services/helpers';

const Signin: FC = () => {
    useEffect(() => {
        document.title = `Sign in`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='form-page'>
            <h1>Sign In</h1>
            <Form className='login-form'>
                {generateFormFields('signin').map((item, index) => {
                    return (
                        <Form.Item key={index}>
                            <Input size='large' type={item.type} placeholder={item.placeholder} />
                        </Form.Item>
                    );
                })}
                <Form.Item>
                    <Button block size='large' type='primary' htmlType='submit'>
                        Log in
                    </Button>
                </Form.Item>
                <p>Don't have an account yet?</p>
                <Link to='/signup'>Sign Up</Link>
            </Form>
        </div>
    );
};

export default Signin;
