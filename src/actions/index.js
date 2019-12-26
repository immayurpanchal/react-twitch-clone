import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";

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
    const response = await streams.post("/streams", formValues);
    dispatch({ type: CREATE_STREAM, payload: response.data });
  };
};

export const fetchStreams = () => {
  return async dispatch => {
    const response = await streams.get("/streams");
    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};

export const fetchStream = id => {
  return async dispatch => {
    const response = await streams.get(`streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data });
  };
};

export const deleteStream = id => {
  return async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
  };
};

export const editStream = (id, formValues) => {
  return async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data });
  };
};
