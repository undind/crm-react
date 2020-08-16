import { call, put, takeEvery } from 'redux-saga/effects';

import { Notification } from '../../../components';
import { history } from '../../../history';

import * as actionTypes from '../../types/users';
import { userSignUpActionSuccess, userSignUpActionError, userSignInActionSuccess } from '../../actions/users';
import { userLoginLink, userRegistrationLink } from '../../../services/urls/user';

/**
 * @function
 * @name userSignIn
 * @description - Sign In user
 */
function* userSignIn(action: actionTypes.UserLoginAction) {
    const data = action.payload.data;

    try {
        const response = yield call(userLoginLink, data);

        if (response) {
            window.localStorage.setItem('token', response.token);
            yield put(userSignInActionSuccess(response.token));
            history.push(`/`);
            Notification('success', 'bottomLeft', ``, `Welcome to your account ${data.username}`);
        }
    } catch (e) {
        if (e?.data?.message) {
            yield put(userSignUpActionError(e?.data?.message));
            Notification('error', 'bottomLeft', '', e?.data?.message);
        } else {
            Notification('error', 'bottomLeft', '', 'Something went wrong');
        }
    }
}

/**
 * @function
 * @name userSignUp
 * @description - Sign Up user
 */
function* userSignUp(action: actionTypes.UserRegistrationAction) {
    const data = action.payload.data;

    try {
        const response = yield call(userRegistrationLink, data);

        if (response) {
            yield put(userSignUpActionSuccess(response));
            history.push(`/signin`);
            Notification('success', 'bottomLeft', 'The account has been created', 'You sign in to your account');
        }
    } catch (e) {
        if (e?.data?.message) {
            yield put(userSignUpActionError(e?.data?.message));
            Notification('error', 'bottomLeft', '', e?.data?.message);
        } else {
            Notification('error', 'bottomLeft', '', 'Something went wrong');
        }
    }
}

export default function* watchUserAuthSaga() {
    yield takeEvery(actionTypes.USER_LOGIN, userSignIn);
    yield takeEvery(actionTypes.USER_REGISTRATION, userSignUp);
}
