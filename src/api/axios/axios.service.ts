import axios, { AxiosInstance } from "axios";

export default class AxiosService {
  public service: AxiosInstance;
  constructor() {
    this.service = axios.create({
      baseURL: import.meta.env.VITE_APP_HOST,
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
      },
    })!;
    this.interceptorRequest();
    this.interceptorResponse();
  }

  interceptorRequest() {
    this.service.interceptors.request.use(
      //Success request
      (config: any) => {
        config.headers = {
          Authorization: "Bla Bla Bla",
          "Accept-Language": "en",
        };
        return config;
      },
      (error: Error) => {
        return Promise.reject(error);
      }
    );
  }

  interceptorResponse() {
    this.service.interceptors.response.use(
      //Success response
      (res: any) => {
        if (res.data.err_code != 0) {
          console.log(res.data.err_msg);
          return Promise.reject(res.data);
        }
        return res.data;
      },
      //Fail response
      (error: Error) => {
        // Can handle error response with 'error.response.status'
        return Promise.reject(error);
      }
    );
  }
}
