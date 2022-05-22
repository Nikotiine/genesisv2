import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./components/_helpers/axios";
import "@/style/main.scss";
createApp(App).use(store).use(router).mount("#app");
