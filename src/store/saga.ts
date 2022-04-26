import { all } from 'redux-saga/effects';
import { saga as routingSaga } from './routing';

export default function* rootSaga() {
  yield all([
    ...routingSaga,
  ]);
}
