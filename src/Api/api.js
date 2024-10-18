import axios from "axios";

let axios_instance = axios.create();

axios_instance.interceptors.request.use(
  (configuration) => {
    const config = configuration;
    const authToken = localStorage.getItem("auth_token");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axios_instance;