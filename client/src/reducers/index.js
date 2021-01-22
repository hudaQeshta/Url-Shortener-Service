import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer } from "./userReducers";
import {
  urlListReducer,
  urlRedirectReducer,
  urlShorteningReducer,
} from "./urlReducers";

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,

  urlList: urlListReducer,
  urlRedirect: urlRedirectReducer,
  urlShortening: urlShorteningReducer,
});
