import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';

import { generateFormFields } from '../../services/helpers';

const Signup = () => {
    return (
        <div className='form-page'>
            <h1>Sign Up</h1>
            <Form className='login-form'>
                {generateFormFields('signup').map((item, index) => {
                    return (
                        <Form.Item key={index}>
                            <Input
                                size='large'
                                type={item.type}
                                prefix={
                                    <Icon
                                        type={item.iconType}
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                placeholder={item.placeholder}
                            />
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
