export interface IUser {
    username: string;
    email: string;
}

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export interface UserLoginAction {
    type: typeof USER_LOGIN_SUCCESS;
    payload: {
        data: IUser;
    };
}

export const USER_REGISTRATION = 'USER_REGISTRATION';
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
export const USER_REGISTRATION_ERROR = 'USER_REGISTRATION_ERROR';

export interface IUserReg {
    username: string;
    email: string;
    password: string;
    password_2: string;
}

export interface UserRegistrationAction {
    type: typeof USER_REGISTRATION;
    payload: {
        data: IUserReg;
    };
}

export type UserActionTypes = UserLoginAction | UserRegistrationAction;
