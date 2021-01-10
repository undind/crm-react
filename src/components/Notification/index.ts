import { notification } from 'antd';

export default (
  type: any,
  placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | undefined = 'bottomLeft',
  description: string,
  message: string
) => {
  if (type === 'success') {
    return notification.success({
      message,
      description,
      placement,
    });
  }

  if (type === 'error') {
    return notification.error({
      message,
      description,
      placement,
    });
  }

  if (type === 'info') {
    return notification.info({
      message,
      description,
      placement,
    });
  }
};
