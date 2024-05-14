import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import AdminDashboardView from "../views/AdminDashboardView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    component: AdminDashboardView,
  },
  {
    path: "/",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
