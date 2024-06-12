import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin',
            component: () => import("../layouts/AdminLayout.vue"),
            children: [
                {
                    path: "home",
                    name: "home",
                    component: () => import("../pages/home.vue"),
                },
                {
                    path: "users",
                    name: "users",
                    component: () => import("../pages/Users.vue"),
                },
            ]
        },
        {
            path: '/auth',
            component: () => import("../layouts/AuthLayout.vue"),
            children: [
                {
                    path: "login",
                    name: "login",
                    component: () => import("../pages/login.vue"),
                },
            ]
        },
    ],
});



export default router;
