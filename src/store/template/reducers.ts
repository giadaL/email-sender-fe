import { TDataMeta } from '@store/metaActionGenerator';
import { EFormStatus } from '@schemas/schemas_d';
import types from './types';
import { GenericAction } from '~/schemas/actions_d';
import { TemplateState, TTemplates } from './index_d';

const datainitialState: TemplateState = {
  data: [],
  dataMeta: {
    message:"",
    error: null,
    status:EFormStatus.NONE
  }
};


const reducers = (state = datainitialState, action: GenericAction<unknown>) => {
  switch (action.type) {
    case types.SET_TEMPLATES: {
      return { ...state, data: action.payload as TTemplates[] };
    }
    case types.SET_LOAD_DATA_META: {
      return { ...state, dateMeta: action.payload as TDataMeta };
    }
    default:
      return state;
  }
};

export default reducers;
