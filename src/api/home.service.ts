import BaseHttpService from "./axios/base-http.service";

export default class HomeService extends BaseHttpService {
  async askQuestion(data: any) {
    return this.post("/openai/ask", data);
  }
}
