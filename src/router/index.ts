import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import AdminDashboardView from "../views/admin/AdminDashboardView.vue";
import CompaintsView from "../views/CompaintsView.vue";
import AgencyView from "../views/admin/AgencyView.vue";
import CitizenHomeView from "../views/citizen/CitizenHomeView.vue";
import NewCompaintView from "../views/citizen/NewCompaintView.vue";

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
    path: "/admin/denuncias",
    name: "admin-denuncias",
    component: CompaintsView,
  },
  {
    path: "/admin/orgaos",
    name: "admin-orgaos",
    component: AgencyView,
  },
  {
    path: "/citizen/home",
    name: "citizen-home",
    component: CitizenHomeView,
  },
  {
    path: "/citizen/new-compaint",
    name: "citizen-new-compaint",
    component: NewCompaintView,
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
