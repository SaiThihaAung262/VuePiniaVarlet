import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { getArticles } from "../api/other";
import { ArticleData } from "../types";

export const useHomeStore = defineStore("home-store", {
  state: () => {
    return {
      articleData: {} as ArticleData,
      theme: useLocalStorage("theme", "light"),
      lang: useLocalStorage("lang", "en"),
    };
  },
  actions: {
    async getArticleData(): Promise<ArticleData> {
      return await getArticles().then((res) => {
        this.articleData = {
          list: res.data.list,
          total: res.data.total,
        };
        return res.data;
      });
    },
    setLanguage(data : string) {
      this.lang = data
    },
    setTheme(data: string){
      this.theme = data
    }
  },
});
