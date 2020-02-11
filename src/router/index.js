import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const PATHS = {
  login : "/login",
  catalog: "/",
  home: "/"
}

// list of urls requiring auth
export const PRIVATE_PAGES = [PATHS.catalog];

export const router = new Router({
  routes: [
    {
      path: PATHS.catalog,
      name: "catalog",
      component: () => import("@/views/Catalog")
    },
    {
      path: PATHS.login,
      name: "login",
      component: () => import("@/views/Login")
    },
    { path: '*', redirect: '/' }
  ]
});
