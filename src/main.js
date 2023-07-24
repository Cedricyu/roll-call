// import "ant-design-vue/dist/antd.css";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Antd from "ant-design-vue";
import router from "./router";
import App from "./App";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);

app.use(Antd);
app.use(router);

app.mount("#app");
