// src/userActions.js
export const fetchUserRequest = (id) => ({
  type: "FETCH_USER_REQUEST",
  payload: { id },
});

export const fetchUserSuccess = (user) => ({
  type: "FETCH_USER_SUCCESS",
  payload: { user },
});

export const fetchUserFailure = (message) => ({
  type: "FETCH_USER_FAILURE",
  payload: { message },
});

export const setTitleSuccess = (message) => ({
  type: "FETCH_USER_SUCCESS",
  payload: message,
});

