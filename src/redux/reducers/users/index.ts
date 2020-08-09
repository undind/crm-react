import * as actionTypes from '../../types/users';

interface State {
    errorMessage: string;
    isLoading: Boolean;
    user: Array<actionTypes.IUser>;
}

const initialState: State = {
    errorMessage: '',
    isLoading: false,
    user: [],
};

export default function (state = initialState, action: any) {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload.data,
            };
        case actionTypes.USER_LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
            };

        case actionTypes.USER_REGISTRATION:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.USER_REGISTRATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload.data,
            };
        case actionTypes.USER_REGISTRATION_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload.error,
            };
        default:
            return state;
    }
}
