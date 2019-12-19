import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

const initialState = {
  profile: {
    email: "",
    name: "",
    imageUrl: ""
  }
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      const { email, name, imageUrl } = action.payload;
      return { ...state, email, name, imageUrl };
    default:
      return state;
  }
};

export default combineReducers({
  profile: profileReducer,
  form: FormReducer
});
