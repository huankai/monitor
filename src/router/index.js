import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import Dashboard from "@/router/dashboard";

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ...Dashboard.dashboard
  ]
});

