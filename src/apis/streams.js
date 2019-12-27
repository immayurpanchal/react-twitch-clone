import axios from "axios";

export default axios.create({
  baseURL: "https://react-twitch-server.herokuapp.com"
});
