import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";

function* runExampleSaga() {
  console.log("runExampleSaga");
}

function* rootSaga() {
  yield all([takeLatest("example/updateExampleData", runExampleSaga)]);
}

export default rootSaga;
