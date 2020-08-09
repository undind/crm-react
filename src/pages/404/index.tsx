import React, { FC, useEffect } from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const NotFoundPage: FC = () => {
    const history = useHistory();

    useEffect(() => {
        document.title = `Page not found`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Result
            status='404'
            title='404'
            subTitle='Sorry, the page you visited does not exist.'
            extra={
                <Button type='primary' onClick={() => history.push('/')}>
                    Back Home
                </Button>
            }
        />
    );
};

export default NotFoundPage;
