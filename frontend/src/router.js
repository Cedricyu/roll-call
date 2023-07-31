import { createRouter, createWebHistory } from "vue-router";
import Search from "./views/Search.vue";
import Home from "./views/Home.vue";
import InsertPage from "./views/Insert";
import LoginPage from "./views/loginPage";
const routes = [
  {
    path: "/search",
    name: "searchpage",
    component: Search,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/insert",
    name: "insert",
    component: InsertPage,
    meta: {
      requiresAuth: true,
   },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
