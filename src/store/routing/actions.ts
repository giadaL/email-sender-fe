import { Location } from 'history';
import { Routes } from '~/components/routes/urls';
import { CommandAction, GenericAction } from '~/schemas/actions_d';
import types from './types';

const setLocation = (location: Location): GenericAction<Location> => ({
  type: types.SET_LOCATION,
  payload: location,
});

const linkTo = (uri: Routes): CommandAction => ({
  type: types.LINK_TO,
  payload: uri,
});

export default {
  setLocation,
  linkTo,
};
