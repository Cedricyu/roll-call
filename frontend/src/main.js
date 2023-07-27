import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import router from "./router";
import Antd from "ant-design-vue"; // Import Ant Design Vue

const app = createApp(App);

app.use(router);
app.use(Antd); // Use Ant Design Vue

console.log(router);

app.mount("#app");
