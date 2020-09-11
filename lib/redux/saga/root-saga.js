import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import { updateExampleData } from "../slices/exampleSlice";

function* runExampleSaga() {
  console.log("runExampleSaga");
}

function* rootSaga() {
  yield all([takeLatest("example/updateExampleData", runExampleSaga)]);
}

export default rootSaga;
