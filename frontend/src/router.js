import { createRouter, createWebHistory } from "vue-router";
import Search from "./views/Search.vue";
import Home from "./views/Home.vue";
import InsertPage from "./views/Insert.vue";
import LoginPage from "./views/loginPage.vue";
import store from "./store";
import SetPage from "./views/Setting.vue";

const routes = [
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/Admin",
    meta: { requireAuth: true }, // 用來作為此頁是否需要權限驗證的設定
    children: [
      {
        path: "insert",
        component: InsertPage,
      },
      {
        path: "/setting",
        name: "setting",
        component: SetPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn; // Assuming you have the Vuex store set up

  console.log(isLoggedIn);

  if (to.meta.requireAuth && !isLoggedIn) {
    next({ name: "Login" }); // This line may cause the issue
  } else {
    next();
  }
});

export default router;
