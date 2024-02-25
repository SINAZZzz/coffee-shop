import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

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
