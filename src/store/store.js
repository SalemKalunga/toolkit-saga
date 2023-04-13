import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { catsSlice } from "./catsSlice/catesSlice";
import logger from "redux-logger";
import { rootSaga } from "./root-saga";
const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cats: catsSlice,
  },
  middleware: [saga, logger],
});
saga.run(rootSaga);
