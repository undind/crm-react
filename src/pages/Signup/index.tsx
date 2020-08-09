import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import { generateFormFields } from '../../services/helpers';
import { userSignUpAction } from '../../redux/actions/users';

const Signup: FC = () => {
    const dispacth = useDispatch();

    useEffect(() => {
        document.title = `Sign in`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onFinish = (values: any) => {
        console.log('Finish:', values);
        dispacth(userSignUpAction(values));
    };

    return (
        <div className='form-page'>
            <h1>Sign Up</h1>
            <Form className='login-form' onFinish={onFinish}>
                {generateFormFields('signup').map((item, index) => {
                    if (item.name === 'password') {
                        return (
                            <Form.Item key={index} name={item.name} rules={item.rules} hasFeedback>
                                <Input.Password size='large' type={item.type} placeholder={item.placeholder} />
                            </Form.Item>
                        );
                    }

                    if (item.name === 'password_2') {
                        return (
                            <Form.Item
                                key={index}
                                name={item.name}
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password size='large' type={item.type} placeholder={item.placeholder} />
                            </Form.Item>
                        );
                    }

                    return (
                        <Form.Item key={index} name={item.name} rules={item.rules}>
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
