const initialState = {
  user: null,
  loading: false,
  error: null,
  title: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUESTS":
      return { ...state, loading: true, error: null };
    case "FETCH_USER_SUCCESS":
      return { ...state, user: action.payload.user, loading: false };
    case "FETCH_USER_FAILURE":
      return { ...state, loading: false, error: action.payload.message };
    case "SET_TITLE":
      return {
          ...state,
          title: null
        };
    case "SET_TITLE_SUCCESS":
          return {
              ...state,
              title: action.payload.message
            };
    default:
      return state;
  }
};

export default userReducer;
