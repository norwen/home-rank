import Vue from "vue";
import Vuex from "vuex";

import catalog from "./catalog.module";
import auth from "./auth.module";
import userVideos from "./userVideos.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    catalog,
    auth,
    userVideos
  }
});
