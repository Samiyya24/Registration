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
                {
                    path: "admins",
                    name: "admins",
                    component: () => import("../pages/Admins.vue"),
                },
            ]
        },
        {
            path: '/',
            component: () => import("../layouts/AuthLayout.vue"),
            children: [
                {
                    path: "",
                    name: "login",
                    component: () => import("../pages/login.vue"),
                },
            ]
        },
    ],
});



export default router;
