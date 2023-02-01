import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { askQuestion } from "../api/other";
import { ArticleData, ResponseData } from "../types";

export const useHomeStore = defineStore("home-store", {
  state: () => {
    return {
      articleData: {} as ArticleData,
      theme: useLocalStorage("theme", "light"),
      lang: useLocalStorage("lang", "en"),
    };
  },
  actions: {
    async searchQuestion(data: any): Promise<ResponseData> {
      return await askQuestion(data).then((res) => {
        return res;
      });
    },

    setLanguage(data: string) {
      this.lang = data;
    },

    setTheme(data: string) {
      this.theme = data;
    },
  },
});
