import { RouteRecordRaw } from "vue-router";

export const homeRouters = [
  {
    path: "/home",
    name: "home",
    meta: {
      title: "tabbar.home",
      icon: "home",
    },
    component: () => import("./../../views/Home/index.vue"),
  },
  {
    path: "/account",
    name: "account",
    meta: {
      title: "tabbar.account",
      icon: "account-circle",
    },
    component: () => import("./../../views/Account/index.vue"),
  },
];
export const homeRoute: RouteRecordRaw = {
  path: "/",
  component: () => import("/@/layout/Home.vue"),
  redirect: "/home",
  children: [...homeRouters],
};
