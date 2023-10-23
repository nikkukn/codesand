import { all } from "redux-saga/effects";
import userSaga from "./sagas/userSaga";
import appSaga from "./sagas/appSaga";
// Import other sagas as needed
function* rootSaga() {
  yield all([userSaga(), appSaga()]);
}

export default rootSaga;
