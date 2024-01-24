import { call, put, takeEvery } from 'redux-saga/effects';

import { createUser } from './actions';
import { create } from './service';

function* createUserSaga({
  payload,
}: ReturnType<typeof createUser.request>): Generator {
  try {
    yield call(create, payload);
    yield put(createUser.success());
  } catch (err) {
    yield yield put(createUser.success());
  }
}

export default [takeEvery(createUser.request, createUserSaga)];
