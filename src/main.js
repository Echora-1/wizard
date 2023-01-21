import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "vue-fullpage.js/dist/style.css";
import VueFullPage from "vue-fullpage.js";
import MainPage from "@/components/pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/", component: MainPage }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(VueFullPage);
app.use(router);
app.mount("#app");
