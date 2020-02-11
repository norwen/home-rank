import { ContentService, ContentMockService } from '@/common/api.service'
import { FETCH_CATALOG } from './actions.type'
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
        ContentMockService.patchData(data)
          .then((data) => commit(SET_VIDEOS, data))
      })
      .catch(error => {
        throw new Error(error)
      })
  }
  // },
  // [UPDATE_VIDEO]({ commit, payload }) {
  //   // обновляем одно видео, а в LS обновляем все, тк это наша база
  //   return ContentService.updateVideo({ id, data })
  //     .then(({ data }) => {
  //       commit(SET_VIDEOS, data))
  //     })
  //     .catch(error => {
  //       throw new Error(error);
  //     });
  // }
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
