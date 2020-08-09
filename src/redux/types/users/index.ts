export interface IUser {
    username: string;
    email: string;
    last_seeen: string;
}

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

interface UserLoginAction {
    type: typeof USER_LOGIN_SUCCESS;
    payload: IUser;
}

export type UserActionTypes = UserLoginAction;

export const USER_REGISTRATION = 'USER_REGISTRATION';
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
export const USER_REGISTRATION_ERROR = 'USER_REGISTRATION_ERROR';
