import { useSelector } from 'react-redux';
import { Routing, RoutingLocation } from './index_d';
import types from './types';


// @ts-ignore
const getState = (state: unknown): Routing => state[types.prefix];

const getLocation = (state: unknown): RoutingLocation => getState(state).location;

const getPathname = (state: unknown): string => getLocation(state)?.pathname;

const useLocation = () =>
  useSelector(getLocation, (left, right) => left.hash === right.hash && left.pathname === right.pathname && left.search === right.search);

export default { getState, getLocation, getPathname, useLocation };
