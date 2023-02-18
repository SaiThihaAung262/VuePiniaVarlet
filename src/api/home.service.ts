import BaseHttpService from "./axios/base-http.service";
import { ResponseData } from "../types";

interface HomeServiceInterface {
  askQuestion(data: any): Promise<ResponseData>;
}

export default class HomeService
  extends BaseHttpService
  implements HomeServiceInterface
{
  async askQuestion(data: any) {
    return this.post("/openai/ask", data);
  }
}
