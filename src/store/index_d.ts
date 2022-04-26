import { CombinedState } from 'redux';
import { Routing as RoutingState } from './routing/index_d';


export type AppState = {
  ROUTING: RoutingState;
};

export type GeneralState = CombinedState<AppState>;
