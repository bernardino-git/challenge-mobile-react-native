import { all, takeLatest } from 'redux-saga/effects';

import { ComicsTypes } from './comics/types';
import { load } from './comics/sagas';

export default function* rootSaga() {
   yield all([
    takeLatest(ComicsTypes.LOAD_REQUEST, load),
  ]);
}