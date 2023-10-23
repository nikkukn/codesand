import { call, put, takeEvery } from "redux-saga/effects";
import {
 setTitleSuccess
} from "../actions/usersActions";
function* setTitle(action) {
  yield put(setTitleSuccess(action.payload.title));
}

export default function* watchTitle() {
  yield takeEvery("SET_TITLE", setTitle);
}
