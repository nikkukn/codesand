// src/User.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRequest } from "../store/actions/usersActions";
import useDataFetchHook from "../hooks/useDataFetchHook";
const User = ({ userId }) => {
  const dispatch = useDispatch();

  const {error, userData, isLoading, fetchUserData} = useDataFetchHook()
  useEffect(() => {
    dispatch(fetchUserRequest(userId));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      {userData.user && (
        <div>
          {
            userData.user.products.map((item)=>(
              <div key={item.id}>
                
                <p>Title: {item.title}</p>
              </div>
            ))
          }
        </div>
      )}
      <button
        onClick={() => dispatch()}
      >
        Fetch User with ID 1
      </button>
    </div>
  );
};

export default User;
