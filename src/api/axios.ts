import _axios from "axios";

const axios = _axios.create({
  baseURL: "http://127.0.0.1:3000"
});

// axios.defaults.withCredentials = true;

export default axios;
