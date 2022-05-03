import { metaActionGenerator } from '@store/metaActionGenerator';
import { GenericAction, SimpleAction } from "../../schemas/actions_d";
import types from './types';
import { TTemplates } from './index_d';

const doloadTemplates = (): SimpleAction => ({
  type: types.DO_LOAD_TEMPLATES,
});

const setTemplates = (templates: TTemplates): GenericAction<TTemplates> => ({
  type: types.SET_TEMPLATES,
  payload: templates,
});

const setLoadDataMeta= metaActionGenerator(types.SET_LOAD_DATA_META)


export default {
  doloadTemplates,
  setTemplates,
  setLoadDataMeta,
};
