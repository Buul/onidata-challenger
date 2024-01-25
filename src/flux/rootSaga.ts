import { all } from 'redux-saga/effects';

import sigInSaga from './modules/sigIn/sagas';
import userSaga from './modules/user/sagas';

function* rootSaga() {
  yield all([...sigInSaga, ...userSaga]);
}

export default rootSaga;
