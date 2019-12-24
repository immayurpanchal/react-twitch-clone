import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT } from "./types";

// signIn method is an action creator which returns
// actions object
export const signIn = payload => {
  return {
    type: SIGN_IN,
    payload
  };
};

export const signOut = payload => {
  return {
    type: SIGN_OUT,
    payload
  };
};

export const streamCreate = formValues => {
  return async dispatch => {
    streams.post(formValues);
  };
};
