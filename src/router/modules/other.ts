import {RouteRecordRaw} from "vue-router";

export const other: Array<RouteRecordRaw> = [
    {
        path: "/404",
        name: "404",
        //component: () => import('/@/views/Login/index.vue'),
        component: () => import("/@/views/404/index.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../../views/Auth/login.vue"),
    },
];
