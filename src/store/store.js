import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { configureStore } from '@reduxjs/toolkit'
import rootSaga from "./rootSaga";
import loggerMiddleware from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer, // Pass the reducer as an object with the 'reducer' key
  middleware: [sagaMiddleware] // Apply middleware in the 'middleware' array
});

sagaMiddleware.run(rootSaga);

export default store;
