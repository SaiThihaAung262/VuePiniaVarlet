import BaseHttpService from "./axios/base-http.server";

export default class HomeService extends BaseHttpService {
  async askQuestion(data: any) {
    return this.post("/openai/ask", data);
  }
}
