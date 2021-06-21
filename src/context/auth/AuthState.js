import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import axios from 'axios';
import setAuthToken from "../../Utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERROR,
} from "../types";

const AuthState = (props) => {
  const InitialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: true,
    user: null,
    error: null,
  };

  const [state, disptach] = useReducer(AuthReducer, InitialState);

  //Actions

  //LoadUser
const loadUser = async () => {
    //Load Token to Global Header

    if(localStorage.token)
    {
        console.log(localStorage.token)
        setAuthToken(localStorage.token);
    }
    try {
        const res  =  await axios.get('api/auth');
        disptach({type: USER_LOADED , payload : res.data});
        console.log(res.data)
    } catch (error) {
        disptach({type: AUTH_ERROR })
        console.log(error)
    }
}


  //Register User

  const registerUser =  async formData => {
      const config = {
          headers : {
              'Content-Type' : 'application/json'
          }
      }

      try {
          
        const res = await axios.post('api/users',formData,config);
     
        disptach({type : REGISTER_SUCCESS ,payload : res.data});
        loadUser();
      } catch (error) {
        disptach({type : REGISTER_FAIL ,payload : error.response.data.msg});
      }
  }
  //Login User

  const loginUser =  async formData => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    try {
        
      const res = await axios.post('api/auth',formData,config);
   
      disptach({type : LOGIN_SUCCESS ,payload : res.data});
      loadUser();
    } catch (error) {
      disptach({type : LOGIN_FAIL ,payload : error.response.data.msg});
    }
}


  //Logout User

  const logout = () => {
    disptach({type: LOGOUT})
  }
  
  
  //Clear Error

  const clearErrors = () => {
    disptach({type: CLEAR_ERROR})
  }
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        user: state.user,
        error: state.error,
        registerUser,
        clearErrors,
        loadUser,
        loginUser,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
