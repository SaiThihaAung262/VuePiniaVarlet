import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import router from "../../router/index";

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_HOST,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * @Request
 */
service.interceptors.request.use(
  //Success request
  (config) => {
    config.headers = {
      // Authorization: token,
      // "Accept-Language": "en",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * @Response
 */
service.interceptors.response.use(
  //Success response
  (res) => {
    if (res.data.err_code != 0) {
      console.log(res.data.err_msg);
      return Promise.reject(res.data);
    }

    return res.data;
  },
  //Fail response
  (error) => {
    // Can handle error response with 'error.response.status'
    return Promise.reject(error);
  }
);

export default service;
