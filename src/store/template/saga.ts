import { call, put, takeLatest } from "redux-saga/effects";
import types  from "./types";
import actions  from "./actions";
import api  from "./api";
import RESTClient from "~/RESTClient";


function* doLoadTemplates(){
  const client = yield call(RESTClient)
  yield put(actions.setLoadDataMeta.setLoading());
  try {
    const templates = yield call(api.load(client))
    yield put(actions.setTemplates(templates))
    yield put(actions.setLoadDataMeta.setSuccess("success"))
  }catch (err) {
    yield put(actions.setLoadDataMeta.setError(err || "cannot retrive data"))
  }
}


function* watchDoLoadTemplates() {
  yield takeLatest(types.DO_LOAD_TEMPLATES, doLoadTemplates);
}


export default [watchDoLoadTemplates()];
