import axios from "axios";
import {
  URL_SHORTENING_REQUEST,
  URL_SHORTENING_SUCCESS,
  URL_SHORTENING_FAIL,
  URL_REDIRECT_REQUEST,
  URL_REDIRECT_SUCCESS,
  URL_REDIRECT_FAIL,
  URL_LIST_REQUEST,
  URL_LIST_SUCCESS,
  URL_LIST_FAIL,
} from "../constants/urlConstants";
export const getLinks = () => async (dispatch, getState) => {
  try {
    dispatch({ type: URL_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/urls/links", config);
    dispatch({
      type: URL_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: URL_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getLink = (shortLink) => async (dispatch, getState) => {
  try {
    dispatch({ type: URL_REDIRECT_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/urls/${shortLink}`, config);
    dispatch({
      type: URL_REDIRECT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: URL_REDIRECT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const shorteningLink = (givenUrl) => async (dispatch, getState) => {
  try {
    dispatch({
      type: URL_SHORTENING_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/urls", { givenUrl }, config);
    dispatch({
      type: URL_SHORTENING_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: URL_SHORTENING_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
