import { notification } from 'antd';

export default (
    placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | undefined,
    description: string,
    message: string
) => {
    notification.info({
        message,
        description,
        placement,
    });
};
