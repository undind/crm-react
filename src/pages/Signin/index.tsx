import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Spin } from 'antd';
import { StoreValue } from 'rc-field-form/lib/interface';

import { generateFormFields } from '../../services/helpers';
import { userSignInAction } from '../../redux/actions/users';

const Signin: FC = () => {
    const dispacth = useDispatch();
    const isLoading = useSelector((state: RootStateOrAny) => state.user.isLoading);

    useEffect(() => {
        document.title = `Sign in`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onFinish = (values: StoreValue) => {
        dispacth(userSignInAction(values));
    };

    return (
        <div className='form-page'>
            <h1>Sign In</h1>
            <Spin spinning={isLoading}>
                <Form className='login-form' onFinish={onFinish}>
                    {generateFormFields('signin').map((item, index) => {
                        if (item.name === 'password') {
                            return (
                                <Form.Item key={index} name={item.name} rules={item.rules} hasFeedback>
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
                            Sign in
                        </Button>
                    </Form.Item>
                    <p>Don't have an account yet?</p>
                    <Link to='/signup'>Sign Up</Link>
                </Form>
            </Spin>
        </div>
    );
};

export default Signin;
