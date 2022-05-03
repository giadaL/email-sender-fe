import { CombinedState } from 'redux';
import { Routing as RoutingState } from './routing/index_d';
import { TemplateState } from './template/index_d';


export type AppState = {
  ROUTING: RoutingState;
  TEMPLATES: TemplateState;
};

export type GeneralState = CombinedState<AppState>;
