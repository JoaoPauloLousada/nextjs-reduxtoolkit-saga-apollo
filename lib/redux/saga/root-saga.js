import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import { updateExampleData } from "../slices/exampleSlice";

function* runExampleSaga() {
  yield take("example/updateExampleData");
  console.log("runExampleSaga");
}

function* rootSaga() {
  yield all([call(runExampleSaga)]);
}

export default rootSaga;
