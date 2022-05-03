import { all } from 'redux-saga/effects';
import { saga as routingSaga } from './routing';
import { saga as templateSaga } from './template';

export default function* rootSaga() {
  yield all([
    ...routingSaga,
    ...templateSaga
  ]);
}
