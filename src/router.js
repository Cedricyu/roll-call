import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App";

const routes = [
  {
    path: "/",
    name: "home",
    component: App,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
