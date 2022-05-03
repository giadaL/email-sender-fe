import { combineReducers } from 'redux';

import routing, { types as routingTypes } from './routing';
import template, { types as templateTypes } from './template';

export default combineReducers({
  [routingTypes.prefix]: routing,
  [templateTypes.prefix]: template,
});
