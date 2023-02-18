import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import HomeService from "../api/home.service";
import { ArticleData, ResponseData } from "../types";
import { AxiosResponse } from "axios";

const homeService = new HomeService();
export const useHomeStore = defineStore("home-store", {
  state: () => {
    return {
      articleData: {} as ArticleData,
      theme: useLocalStorage("theme", "light"),
      lang: useLocalStorage("lang", "en"),
    };
  },
  actions: {
    //Promise<ResponseData | AxiosResponse<any, any>>
    async searchQuestion(data: any): Promise<ResponseData> {
      return await homeService.askQuestion(data);
    },

    setLanguage(data: string) {
      this.lang = data;
    },

    setTheme(data: string) {
      this.theme = data;
    },
  },
});
