import axios from "axios";

const api = axios.create({
  baseURL: "https://musicnovuum.herokuapp.com"
})

export default api;
