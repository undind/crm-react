import { call, put, takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../../types/users';
import { userSignInAction, userSignUpAction } from '../../actions/users';
import { userLoginLink, userRegistrationLink } from '../../../services/urls/user';

/**
 * @function
 * @name userSignIn
 * @description - Sign In user
 */
function* userSignIn(data: any) {
    try {
        const response = yield call(userLoginLink, data);

        if (response) {
            yield put(userSignInAction(data));
        }
    } catch (e) {
        console.log(e);
    }
}

/**
 * @function
 * @name userSignUp
 * @description - Sign Up user
 */
function* userSignUp(data: any) {
    try {
        const response = yield call(userRegistrationLink, data);

        if (response) {
            yield put(userSignUpAction(data));
        }
    } catch (e) {
        console.log(e);
    }
}

export default function* watchUserAuthSaga() {
    yield takeEvery(actionTypes.USER_LOGIN, userSignIn);
    yield takeEvery(actionTypes.USER_REGISTRATION, userSignUp);
}
