import axios from "axios";

const api = axios.create({
  baseURL: "https://git.heroku.com/musicnovuum.git"
})

export default api;