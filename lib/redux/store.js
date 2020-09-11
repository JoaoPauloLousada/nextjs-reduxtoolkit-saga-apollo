import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ExampleReducer from "./slices/exampleSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga/root-saga";

const devMode = process.env.NODE_ENV === "development";
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const reducer = {
  example: ExampleReducer,
};

const store = configureStore({
  reducer,
  devTools: devMode,
  middleware,
});

sagaMiddleware.run(saga);

export default store;
