import { ContentService } from '@/common/api.service'
import { FETCH_CATALOG, UPDATE_VIDEOS } from './actions.type'
import { getPatchedVideos } from '../mocks/lsDbHelpers'
import {
  FETCH_START,
  SET_VIDEOS
} from './mutations.type'

const state = {
  isLoading: true,
  videos: []
}

const getters = {
  videos (state) {
    return state.videos
  },
  isLoading (state) {
    return state.isLoading
  }
}

const actions = {
  [FETCH_CATALOG] ({ commit }) {
    commit(FETCH_START)
    return ContentService.get()
      .then(({ data }) => {
        getPatchedVideos(data)
          .then((data) => commit(SET_VIDEOS, data))
      })
      .catch(error => {
        throw new Error(error)
      })
  },
  [UPDATE_VIDEOS] ({ commit, getters }, data) {
    const videos = getters.videos
    const newVideos = videos.map(vid =>
      Object.assign({}, vid, data.find(dataEl => dataEl.id === vid.id) || {})
    )

    commit(SET_VIDEOS, newVideos)
  }
}

const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true
  },
  [SET_VIDEOS] (state, data) {
    state.videos = data
    state.isLoading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
