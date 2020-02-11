import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import "./main.css";

import { PRIVATE_PAGES } from './router'
import { CHECK_AUTH } from "./store/actions.type";
import ApiService from "./common/api.service";
ApiService.init();

// check auth before entering private routes
router.beforeEach((to, from, next) => {
    const isAuthRequired = PRIVATE_PAGES.includes(to.path);

    if (isAuthRequired) {
      return Promise.all([store.dispatch(CHECK_AUTH)]).then(() => {
        const isUserAuthenticated = store.getters.isAuthenticated;

        return isUserAuthenticated ? next() : next('/login')
      })
    }
    return next()
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
