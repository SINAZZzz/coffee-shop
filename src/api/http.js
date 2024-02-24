import axios from "axios";
import process from "process";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export function get(url, config = {}) {
  return axios
    .get(url, config)
    .then((responne) => responne.data)
    .catch((error) => console.log(error));
}

export function post(url, data, config = {}) {
  return axios
    .post(url, data, config)
    .then((responne) => responne.data)
    .catch((error) => console.log(error));
}
