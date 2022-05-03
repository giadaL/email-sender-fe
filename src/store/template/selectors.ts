import { TDataMeta } from '@store/metaActionGenerator';
import { TemplateState, TTemplates } from './index_d';
import types from './types';

const getState = (state: unknown): TemplateState => state[types.prefix];

const getTemplates = (state: unknown): TTemplates[] => getState(state).data;

const getDataMeta = (state: unknown): TDataMeta => getState(state).dataMeta;


export default { getState, getTemplates, getDataMeta};
