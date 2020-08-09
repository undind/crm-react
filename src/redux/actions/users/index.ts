import * as actionTypes from '../../types/users';

export const userSignInAction = (data: actionTypes.IUser) => {
    return {
        type: actionTypes.USER_LOGIN,
        payload: {
            data,
        },
    };
};

export const userSignInActionSuccess = (data: actionTypes.IUser) => {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: {
            data,
        },
    };
};

export const userSignInActionError = (error: string) => {
    return {
        type: actionTypes.USER_LOGIN_ERROR,
        payload: {
            error,
        },
    };
};

export const userSignUpAction = (data: actionTypes.IUserReg) => {
    return {
        type: actionTypes.USER_REGISTRATION,
        payload: {
            data,
        },
    };
};

export const userSignUpActionSuccess = (data: actionTypes.IUserReg) => {
    return {
        type: actionTypes.USER_REGISTRATION_SUCCESS,
        payload: {
            data,
        },
    };
};

export const userSignUpActionError = (error: string) => {
    return {
        type: actionTypes.USER_REGISTRATION_ERROR,
        payload: {
            error,
        },
    };
};
