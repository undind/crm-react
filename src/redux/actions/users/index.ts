import * as actionTypes from '../../types/users';

export const userSignInAction = (data: actionTypes.IUser) => {
    return {
        type: actionTypes.USER_LOGIN,
        payload: {
            data,
        },
    };
};

export const userSignUpAction = (data: actionTypes.IUser) => {
    return {
        type: actionTypes.USER_REGISTRATION,
        payload: {
            data,
        },
    };
};
