import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import home from "./components/Home";

const routes = [
    { path: "/", component: home},

];

export default new Router({
    mode: "history",
    routes
});
