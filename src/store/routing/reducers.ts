import types from './types';
import { Routing, RoutingLocation } from './index_d';
import { GenericAction } from '~/schemas/actions_d';

const datainitialState: Routing = {
  location: {
    hash: '',
    pathname: '/',
    search: '',
    state: {},
  },
};

// @ts-ignore
const initialState = (params?) => {
  return params || datainitialState;
};

const reducers = (state = initialState(), action: GenericAction<unknown>) => {
  switch (action.type) {
    case types.SET_LOCATION: {
      return { ...state, location: action.payload as RoutingLocation };
    }
    default:
      return state;
  }
};

export default reducers;
