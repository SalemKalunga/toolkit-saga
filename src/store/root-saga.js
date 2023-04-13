import { all, call } from "redux-saga/effects";
import { catsSaga } from "./catsSlice/catsSage/catsSaga";

export function* rootSaga() {
  yield all([call(catsSaga)]);
}
