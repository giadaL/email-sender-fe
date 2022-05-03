import { EFormStatus } from '~/schemas/schemas_d';
import { GenericAction } from '~/schemas/actions_d';



export type TDataMeta = {
    message: string,
    status: string,
    error: Error | string,
}

export type MetaActionGeneratorType = {
  setLoading: () => GenericAction<TDataMeta>;
  setSuccess: (message: string) => GenericAction<TDataMeta>;
  setError: (error: Error) => GenericAction<TDataMeta>;
  reset: () => GenericAction<TDataMeta>;
};

const serializeError = (err: string | Error | null | number) : string=> {
   return (err as Error)?.message as string  || err as string ||`${err}`|| "something went wrong" ;
}

function metaActionPayload(message: string = '', status: EFormStatus = EFormStatus.NONE, error:string = null): TDataMeta {
  return {
        message,
        status,
        error,
      }
 
}

export function metaActionGenerator(actionType: string): MetaActionGeneratorType {
  return {
    setLoading: () => ({ type: actionType, payload: metaActionPayload('', EFormStatus.LOADING) }),
    setSuccess: (message) => ({ type: actionType, payload: metaActionPayload(message, EFormStatus.SUCCESS, null) }),
    setError: (error) => ({ type: actionType, payload: metaActionPayload('', EFormStatus.FAILURE, serializeError(error)) }),
    reset: () => ({ type: actionType, payload: metaActionPayload('', EFormStatus.NONE, null)}),
  };
}
