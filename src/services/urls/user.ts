import instance from '../instance';
import endpoints from '../endpoints';

import { IUser, IUserReg } from '../../redux/types/users';

/**
 * @name userLoginLink
 * @function
 * @description axios instance - User sign in
 */
export const userLoginLink = (data: IUser) => {
    return instance.post(endpoints.user.sign_in, data);
};

/**
 * @name userRegistrationLink
 * @function
 * @description axios instance - User sing up
 */
export const userRegistrationLink = (data: IUserReg) => {
    return instance.post(endpoints.user.sign_up, data);
};
