import { all } from 'redux-saga/effects';

import watchUserkAuthSaga from './users';

export default function* rootSaga() {
  yield all([watchUserkAuthSaga()]);
}
