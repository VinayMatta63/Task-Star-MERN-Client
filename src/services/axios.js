import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8080/",
  baseURL: "https://task-manager-server-vm.herokuapp.com/",
});

export default api;
