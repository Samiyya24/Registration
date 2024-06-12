import { createRouter, createWebHistory } from "vue-router";


const scrollBehavior = () => {
    return { top: 0 }
};

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../pages/home.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../pages/login.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../pages/register.vue"),
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior,
});

export default router;
