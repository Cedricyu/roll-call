import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue"; // Import Ant Design Vue
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import store from "./store";


const app = createApp(App);

app.use(router);
app.use(Antd); // Use Ant Design Vue
app.use(ElementPlus);
app.use(store);

console.log(router);

app.mount("#app");
