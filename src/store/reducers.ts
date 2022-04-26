import { combineReducers } from 'redux';

import routing, { types as routingTypes } from './routing';

export default combineReducers({
  [routingTypes.prefix]: routing,
});
