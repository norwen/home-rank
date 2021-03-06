import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import { router, PRIVATE_PAGES } from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import defaultVideoPreview from '@/assets/default-video-preview.png'

import './main.css'

import { CHECK_AUTH } from './store/actions.type'
import ApiService from './common/api.service'

library.add(faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)
ApiService.init()

// check auth before entering private routes
router.beforeEach((to, from, next) => {
  const isAuthRequired = PRIVATE_PAGES.includes(to.path)

  if (isAuthRequired) {
    return Promise.all([store.dispatch(CHECK_AUTH)]).then(() => {
      const isUserAuthenticated = store.getters.isAuthenticated

      return isUserAuthenticated ? next() : next('/login')
    })
  }
  return next()
})

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: defaultVideoPreview,
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
