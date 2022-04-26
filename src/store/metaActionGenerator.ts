import { message as antdMessage } from 'antd';
import { DataMeta, FormStatus } from '~/schemas/form_d';
import { GenericAction } from '~/schemas/actions_d';


export type MetaActionGeneratorType<T> = {
  setLoading: () => GenericAction<DataMeta<T>>;
  setSuccess: (message: string) => GenericAction<DataMeta<T>>;
  setError: (error: Error) => GenericAction<DataMeta<T>>;
  reset: () => GenericAction<DataMeta<T>>;
  setEdit: (item: T) => GenericAction<DataMeta<T>>;
};

export const defaultDataMeta: DataMeta = {
  message: '',
  status: FormStatus.NONE,
  error: { message: '' , name: ""} ,
};

export function metaActionPayload<T>(payload: Partial<DataMeta<T>>): DataMeta<T> {
  return { ...(defaultDataMeta as DataMeta<T>), ...payload };
}

export function metaActionGenerator<T>(actionType: string): MetaActionGeneratorType<T> {
  return {
    setLoading: () => ({
      type: actionType,
      payload: metaActionPayload({ status: FormStatus.LOADING }),
    }),
    setSuccess: (message) => ({
      type: actionType,
      payload: metaActionPayload({ message, status: FormStatus.SUCCESS, item: undefined }),
    }),
    setError: (error) => {
      const err = error;
      antdMessage.error(err.message);
      return ({
        type: actionType,
        payload: metaActionPayload({ status: FormStatus.FAILURE, error: err }),
      })
    },
    reset: () => ({ type: actionType, payload: metaActionPayload({ item: undefined }) }),
    setEdit: (item: T) => ({
      type: actionType,
      payload: metaActionPayload({ status: FormStatus.EDIT, item }),
    }),
  };
}
