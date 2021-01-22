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

const urlShorteningReducer = (state = { url: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case URL_SHORTENING_REQUEST:
      return {
        loading: true,
      };
    case URL_SHORTENING_SUCCESS:
      return {
        url: payload,
        loading: false,
      };
    case URL_SHORTENING_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

const urlRedirectReducer = (state = { redirect: "" }, action) => {
  const { type, payload } = action;
  switch (type) {
    case URL_REDIRECT_REQUEST:
      return {
        loading: true,
      };
    case URL_REDIRECT_SUCCESS:
      return {
        loading: false,
        redirect: payload,
      };
    case URL_REDIRECT_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

const urlListReducer = (state = { links: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case URL_LIST_REQUEST:
      return {
        loading: true,
        links: [],
      };
    case URL_LIST_SUCCESS:
      return {
        links: payload,
        loading: false,
      };
    case URL_LIST_FAIL:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export { urlListReducer, urlRedirectReducer, urlShorteningReducer };
