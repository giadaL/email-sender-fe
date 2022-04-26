import { select } from 'redux-saga/effects';
import { getReasonPhrase } from 'http-status-codes';

export enum RESTMethod {
  GET = 'GET',
  PATCH = 'PATCH',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

const RestFetch = async (method: RESTMethod, url: string, body?: object): Promise<unknown> => {

  const result = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  if (result.status >= 400) {
    const error = await result.json();
    error.status = result.status;
    throw error;
  }

  return result.json();
};

export const getBlob = async (url: string, headers?: { [keys: string]: string }): Promise<Blob> => {

  const result = await fetch(url, {
    method: RESTMethod.GET,
    headers: {
      ...(headers || {}),
    },
  });

  if (result.status >= 400) {
    const error = new Error(getReasonPhrase(result.status));
    throw error;
  }

  return result.blob();
};

export const RESTClientBuilder = () => {
  return {
    GET: async (url: string) => RestFetch(RESTMethod.GET, url),
    DELETE: async (url: string) => RestFetch(RESTMethod.DELETE, url),
    POST: async (url: string, body?: object) => RestFetch(RESTMethod.POST, url, body),
    PUT: async (url: string, body?: object) => RestFetch(RESTMethod.PUT, url, body),
    PATCH: async (url: string, body?: object) => RestFetch(RESTMethod.PATCH, url, body),
  };
};

function* RESTClient() {
  return yield select(RESTClientBuilder);
}

export default RESTClient;
