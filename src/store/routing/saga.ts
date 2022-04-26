
import { fork, put, call, take, takeLatest } from 'redux-saga/effects';
import history, { createHistoryChannel } from '@store/history';
import { Routes } from '~/components/routes/urls';

import { CommandAction } from '~/schemas/actions_d';
import actions from './actions';
import types from './types';

function routeChecker(pathname?: string, search?: string) {
  return true;
}

function* router() {
  const channel = yield call(createHistoryChannel);
  while (true) {
    const location = yield take(channel);
    yield put(actions.setLocation(location));
    yield call(routeChecker, location.pathname, location.search);
  }
}


function* linkTo(action: CommandAction) {
  const path = action.payload;
  if (path.search('q=') !== -1 || path.includes('auth')) {
    history.push(path);
  } else {
    history.push({ pathname: path, search: '' });
  }
  yield call(routeChecker, action.payload);
}

export function* watchRouting() {
  return yield fork(router);
}

function* watchLinkTo() {
  yield takeLatest(types.LINK_TO, linkTo);
}


export default [watchRouting(), watchLinkTo()];
