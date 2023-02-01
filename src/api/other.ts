import { post, get } from "./axios/reques";

//post method example
// export const login = (data: any) => {
//   return post("/user/login", data);
// };

//get method example
// export function getArticles(params: any) {
//   return get("/articles", params);
// }

export const login = (data: any) => {
  return post("/users/login", data);
};

export const askQuestion = (data: any) => {
  return post("/openai/ask", data);
};
