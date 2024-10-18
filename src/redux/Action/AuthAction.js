import axios from "axios";
import *  as types from "../../utils/actionTypes";
import { SERVER_URL } from "../../utils/helper";
import axios_instance from "../../Api/api";

const registerUserRequest = () => ({
  type: types.REGISTER_USER_REQUEST,
});

const registerUserSuccess = (user) => ({
  type: types.REGISTER_USER_SUCCESS,
  payload: user,
});

const registerUserFailure = (error) => ({
  type: types.REGISTER_USER_FAILURE,
  payload: error,
});

export const registerUser = (userData) => async (dispatch) => {
  dispatch(registerUserRequest());
  try {
    const response = await axios.post(`${SERVER_URL}/user/register`, userData);
    const user = response?.data?.data || {};
    dispatch(registerUserSuccess(user));
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "An error occurred";
    console.error("Registration Error:", errorMessage);
    dispatch(registerUserFailure(errorMessage));
  }
};




const profileUserRequest = () => ({
  type: types.PROFILE_USER_REQUEST,
});

const profileUserSuccess = (user) => ({
  type: types.PROFILE_USER_SUCCESS,
  payload: user,
});

const profileUserFailure = (error) => ({
  type: types.PROFILE_USER_FAILURE,
  payload: error,
});

export const userPofileAction = (userData) => async (dispatch) => {
  dispatch(profileUserRequest());
  try {
    const response = await axios_instance.get(`${SERVER_URL}/user/profile`, userData);
    console.log("responseresponseresponseresponseresponsexxxxxxxxxxxxxxxxxxx",response)
    const user = response?.data?.user || {};
    console.log("useruseruser",user)
    dispatch(profileUserSuccess(user));
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "An error occurred";
    dispatch(profileUserFailure(errorMessage));
  }
};

const updateProfileUserRequest = () => ({
  type: types.UPDATE_PROFILE_USER_REQUEST,
});

const updateProfileUserSuccess = (user) => ({
  type: types.UPDATE_PROFILE_USER_SUCCESS,
  payload: user,
});

const updateProfileUserFailure = (error) => ({
  type: types.UPDATE_PROFILE_USER_FAILURE,
  payload: error,
});

export const updateProfileAction = (userData) => async (dispatch) => {
  dispatch(updateProfileUserRequest());
  try {
    const response = await axios_instance.post(`${SERVER_URL}/user/update-profile`, userData);
    const user = response?.data?.data || {};
    dispatch(updateProfileUserSuccess(user));
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "An error occurred";
    dispatch(updateProfileUserFailure(errorMessage));
  }
};



const loginUserRequest = () => ({
  type: types.LOGIN_USER_REQUEST,
});

const loginUserSuccess = (user) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: user,
});

const loginUserFailure = (error) => ({
  type: types.LOGIN_USER_FAILURE,
  payload: error,
});

export const loginUser = (loginData) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    const response = await axios.post(`${SERVER_URL}/user/login`, loginData);
    const user = response?.data;

    if (!user || !user.token) {
      throw new Error("Invalid user data from server");
    }

    // Dispatch success
    dispatch(loginUserSuccess(user));

    // Store token and user details in localStorage
    localStorage.setItem("auth_token", user.token);
    localStorage.setItem("user", JSON.stringify(user.user || {}));

  } catch (error) {
    // Handle error
    const errorMessage =
      error.response?.data?.message || error.message || "An error occurred";
    dispatch(loginUserFailure(errorMessage));
  }
};

export const logoutUser = () => {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user");
  return {
    type: types.LOGOUT_USER,
  };
};
