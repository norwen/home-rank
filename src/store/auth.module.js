import { UserService } from '@/common/api.service'
import JwtService from '@/common/jwt.service'
import { LOGIN, CHECK_AUTH, LOGOUT } from './actions.type'
import { RESET_AUTH, SET_AUTH, SET_ERROR } from './mutations.type'
import { removeUserData } from '../mocks/lsDbHelpers'

const state = {
  user: {
    id: null,
    email: '',
    token: null,
    settings: {
      appTheme: 'theme-light',
      filterType: 'rating',
      BookmarkVideoId: null
    }
  },
  isAuthenticated: false
}

const getters = {
  currentUser (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.isAuthenticated
  }
}

const actions = {
  [LOGIN] (context, credentials) {
    return new Promise(resolve => {
      UserService.login(credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [LOGOUT] (context) {
    removeUserData()
    context.commit(RESET_AUTH)
  },
  [CHECK_AUTH] (context) {
    if (JwtService.getToken()) {
      UserService.getUser()
        .then((data) => {
          context.commit(SET_AUTH, data.user)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    } else {
      context.commit(RESET_AUTH)
    }
  }
}

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error
  },
  [SET_AUTH] (state, user) {
    state.isAuthenticated = true
    state.user = user
    state.errors = {}
  },
  [RESET_AUTH] (state) {
    state.isAuthenticated = false
    state.user = {}
    state.errors = {}
    JwtService.destroyToken()
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
