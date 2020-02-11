import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { saveToken } from "./jwt.service"
import {
  saveUserData,
  getUserData,
  getVideosData,
  setVideosData,
  initUserVideos,
  getUserVideos,
  setUserVideos
} from "../mocks/lsDbHelpers"
import { getRandomLikesCount } from "../helpers"
import findIndex from "lodash/findIndex"

import { users as mockUsers} from "@/mocks/users"
// const API_BASE_URL = 'https://fwfg.com/api/'

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = '';
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
      ] = `Token ${JwtService.getToken()}`;
  },

  get(resource, params) {
    return Vue.axios.get(resource, { params }).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  }
};

export default ApiService;

export const UserService = {
  login(credentials) {
    // return ApiService.post("users/login", { user: credentials })
    return UserMockService.login(credentials);
  },
  getUser() {
    return UserMockService.getUser();
  }
}

const UserMockService = {
  login(credentials) {
    const userEmail = credentials && credentials.email;
    const loggedInUserData = mockUsers[userEmail];

    const jwtToken = loggedInUserData.token;
    saveToken(jwtToken);
    saveUserData(loggedInUserData)
    initUserVideos(loggedInUserData.id)

    return Promise.resolve(loggedInUserData)
  },
  getUser() {
    const user = getUserData();

    return Promise.resolve(user);
  }
}


export const UserVideosService = {
  getUserVideos() {
    // return ApiService.get("/user/videos")
    return UserVideosMockService.getUserMockVideos();
  },
  rankUserVideo(payload){
    // return ApiService.post("/user/videos", payload)
    return UserVideosMockService.rankUserVideo(payload)
  }
}

const UserVideosMockService = {
  getUserMockVideos() {
    const userVideos = getUserVideos();

    return Promise.resolve({ data: userVideos });
  },
  rankUserVideo({ id, addLikesCount }) {
    const userVideosData = getUserVideos();
    const currentUserVideos = userVideosData.videos;
    const currentUserLikeCreditsActive = userVideosData.userLikeCreditsActive;
    const videoIndex = findIndex(currentUserVideos, { id: id });

    const availableCredits = addLikesCount > currentUserLikeCreditsActive
      ? currentUserLikeCreditsActive
      : addLikesCount

    const newUserLikeCreditsActive = currentUserLikeCreditsActive - availableCredits;

    if(videoIndex > -1) {
      currentUserVideos[videoIndex].userLikeCount = currentUserVideos[videoIndex].userLikeCount + availableCredits
    } else {
      currentUserVideos.push({ id, userLikeCount: availableCredits })
    }

    // try spend credits
    const newUserVideosData = {
      ...userVideosData,
      videos: currentUserVideos,
      currentUserLikeCreditsActive,
      userLikeCreditsActive: newUserLikeCreditsActive
    }

    setUserVideos(newUserVideosData);
    return Promise.resolve({ data: newUserVideosData})
  }
}

export const ContentService = {
  get(params) {
    const mockDataParams = { category_id : 23751}

    return ApiService.get("http://www.mocky.io/v2/5e3f89603300007f08b04bee", { params: mockDataParams } || params)
  }
};

// eslint-disable-next-line no-unused-vars
export const ContentMockService = {
  patchData(data) {
    let videosMockInfo = getVideosData();

    if(videosMockInfo && videosMockInfo.length === 0) {
      data.forEach(video => {
        videosMockInfo.push({
          id: video.id,
          likesCount: getRandomLikesCount()
        })
      })

      setVideosData(videosMockInfo);
    }

    const dataPatched = data.map(video => {
      const videoMockInfo = videosMockInfo.find(mockVid => mockVid.id === video.id);

      return {
        ...video,
        likesCount: videoMockInfo.likesCount
      }
    })

    return Promise.resolve(dataPatched)
  }
}
