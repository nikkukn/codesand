// src/userSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUser, fetchProducts } from "../../api/mockedUsers";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from "../actions/usersActions";

function* fetchUserSaga(action) {
  try {
    //const user = yield call(fetchUser, action.payload.id);
    const products = yield call(fetchProducts)
    yield put(fetchUserSuccess(products));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export default function* userSaga() {
  yield takeEvery("FETCH_USER_REQUEST", fetchUserSaga);
}
