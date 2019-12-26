import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import profileReducer from "./profileReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  profile: profileReducer,
  form: FormReducer,
  streams: streamReducer
});
