import { SIGN_IN, SIGN_OUT } from "../actions/types";
const profile = {
  email: "",
  name: "",
  imageUrl: "",
  googleId: ""
};

export default (state = profile, action) => {
  switch (action.type) {
    case SIGN_IN:
      const { email, name, imageUrl, googleId } = action.payload;
      return {
        email,
        name,
        imageUrl,
        googleId
      };
    case SIGN_OUT:
      return { email: "", name: "", imageUrl: "", googleId: "" };
    default:
      return state;
  }
};
