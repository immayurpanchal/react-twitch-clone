import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { SIGN_IN, SIGN_OUT } from "../actions/types";

const initialState = {
  profile: {
    email: "",
    name: "",
    imageUrl: ""
  }
};

const profileReducer = (state = initialState.profile, action) => {
  switch (action.type) {
    case SIGN_IN:
      const { email, name, imageUrl } = action.payload;
      return { email, name, imageUrl };
    case SIGN_OUT:
      return { email: "", name: "", imageUrl: "" };
    default:
      return state;
  }
};

export default combineReducers({
  profile: profileReducer,
  form: FormReducer
});
