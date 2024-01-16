import PaymentPage from "./components/PaymentPage.vue";
import AccessPage from "./components/AccessPage.vue";
import ErrorPage from "./components/ErrorPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "PaymentPage",
    component: PaymentPage,
    path: "/",
  },
  {
    name: "AccessPage",
    component: AccessPage,
    path: "/access",
  },
  {
    name: "ErrorPage",
    component: ErrorPage,
    path: "/error",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
