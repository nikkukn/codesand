import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserRequest } from "../store/actions/usersActions";

const useDataFetchHook = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user);
  
  // Use useMemo to memoize the userData object
  const memoizedUserData = useMemo(() => userData, [userData]);
  
  // Extract loading and error properties from the memoized userData
  const loading = memoizedUserData ? memoizedUserData.loading : false;
  const error = memoizedUserData ? memoizedUserData.error : null;

  const fetchUserData = (id) => {
    dispatch(fetchUserRequest(id));
  };

  return {
    userData: memoizedUserData,
    isLoading: loading,
    error,
    fetchUserData
  };
};

export default useDataFetchHook;
