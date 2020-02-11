import { UserVideosService } from '@/common/api.service'
import { FETCH_USER_VIDEOS, RANK_USER_VIDEO } from './actions.type'
import {
  SET_USER_VIDEOS
} from './mutations.type'

const state = {
  videos: [],
  userLikeCreditsTotal: 50,
  userLikeCreditsActive: 0
}

const getters = {
  userVideos (state) {
    return state.videos
  },
  getUserVideoById: (state, getters) => (id) => {
    return getters.userVideos.find(vid => vid.id === id)
  },
  userLikeCreditsActive (state) {
    return state.userLikeCreditsActive
  },
  userLikeCreditsTotal (state) {
    return state.userLikeCreditsTotal
  }
}

const actions = {
  [FETCH_USER_VIDEOS] ({ commit }) {
    return UserVideosService.getUserVideos()
      .then(({ data }) => {
        commit(SET_USER_VIDEOS, data)
      })
      .catch(error => {
        throw new Error(error)
      })
  },
  [RANK_USER_VIDEO] ({ commit }, payload) {
    return UserVideosService.rankUserVideo(payload)
      .then(({ data }) => {
        commit(SET_USER_VIDEOS, data)
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}

const mutations = {
  [SET_USER_VIDEOS] (state, data) {
    state.videos = data.videos
    state.userLikeCreditsActive = data.userLikeCreditsActive
    state.userLikeCreditsTotal = data.userLikeCreditsTotal
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
