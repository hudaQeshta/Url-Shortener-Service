import {
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";

const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        userInfo: payload,
        loading: false,
      };
    case USER_LOGIN_FAIL:
      return {
        error: payload,
        loading: false,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

const userRegisterReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        userInfo: payload,
        loading: false,
      };
    case USER_REGISTER_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export { userLoginReducer, userRegisterReducer };
