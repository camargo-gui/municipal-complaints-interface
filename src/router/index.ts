import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import AdminDashboardView from "../views/admin/AdminDashboardView.vue";
import CompaintsView from "../views/CompaintsView/CompaintsView.vue";
import AgencyView from "../views/admin/AgencyView.vue";
import NewCompaintView from "../views/citizen/NewCompaintView.vue";
import RegisterView from "../views/RegisterView.vue";
import TypeView from "../views/admin/TypeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    component: AdminDashboardView,
  },
  {
    path: "/denuncias",
    name: "denuncias",
    component: CompaintsView,
  },
  {
    path: "/admin/tipos",
    name: "tipos",
    component: TypeView,
  },
  {
    path: "/admin/orgaos",
    name: "admin-orgaos",
    component: AgencyView,
  },
  {
    path: "/cidadao/criar-denuncia",
    name: "citizen-new-compaint",
    component: NewCompaintView,
  },
  {
    path: "/",
    redirect: "/login",
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
