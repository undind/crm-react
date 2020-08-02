import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import { generateFormFields } from '../../services/helpers';

const Signup: FC = () => {
    useEffect(() => {
        document.title = `Sign in`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='form-page'>
            <h1>Sign Up</h1>
            <Form className='login-form'>
                {generateFormFields('signup').map((item, index) => {
                    return (
                        <Form.Item key={index}>
                            <Input size='large' type={item.type} placeholder={item.placeholder} />
                        </Form.Item>
                    );
                })}
                <Form.Item>
                    <Button block size='large' type='primary' htmlType='submit'>
                        Sign up
                    </Button>
                </Form.Item>
                <p>Already have an account?</p>
                <Link to='/signin'>Sign In</Link>
            </Form>
        </div>
    );
};

export default Signup;
