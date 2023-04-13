import { call, takeLatest, put, all } from "redux-saga/effects";
import {
  fetchCatsFailed,
  fetchCatsStart,
  fetchCatsSuccess,
} from "../catesSlice";

function* fetchCatsAsync() {
  yield fetchCatsStart();
  try {
    const cats = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/posts")
    );
    const formattedCats = yield cats.json();
    yield put(fetchCatsSuccess(formattedCats));
  } catch (error) {
    yield put(fetchCatsFailed(error));
  }
}

function* onFetchCatsStart() {
  yield takeLatest("cats/fetchCatsStart", fetchCatsAsync);
}

export function* catsSaga() {
  yield all([call(onFetchCatsStart)]);
}
