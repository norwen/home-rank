import { ID_TOKEN_KEY } from '../common/jwt.service'
import { userVideos as USER_VIDEOS } from './userVideos'
import findIndex from 'lodash/findIndex'
const lsAppPrefix = 'home_rank_'
const userLsFieldName = `${lsAppPrefix}user`
const videosInfoName = `${lsAppPrefix}videos`
const userVideosName = `${lsAppPrefix}userVideos`

export const saveUserData = (userData) => {
  window.localStorage.setItem(userLsFieldName, JSON.stringify(userData))
}

export const getUserData = () => {
  const data = window.localStorage.getItem(userLsFieldName)

  return JSON.parse(data)
}

export const removeUserData = (userId) => {
  window.localStorage.removeItem(userLsFieldName)
  window.localStorage.removeItem(`${ID_TOKEN_KEY}_${userId}`)
}

export const getVideosData = () => {
  const data = window.localStorage.getItem(videosInfoName)

  return (data && JSON.parse(data)) || []
}

export const setVideosData = (videosData) => {
  window.localStorage.setItem(videosInfoName, JSON.stringify(videosData))
}

export const updateVideoData = (video) => {
  const allVideos = getVideosData()

  const updatedVideoIndex = findIndex(allVideos, { id: video.id })
  allVideos[updatedVideoIndex].likesCount = allVideos[updatedVideoIndex].likesCount + video.addLikesCount

  setVideosData(allVideos)
  return Promise.resolve(allVideos)
}

export const getUserVideos = () => {
  const userId = getCurrUserId()
  const data = window.localStorage.getItem(`${userVideosName}_${userId}`)

  return (data && JSON.parse(data)) || []
}

export const setUserVideos = (videosData) => {
  const userId = getCurrUserId()

  window.localStorage.setItem(`${userVideosName}_${userId}`, JSON.stringify(videosData))
}

const getCurrUserId = () => {
  const userData = getUserData()

  return userData && userData.id
}

const patchVideosData = (data) => {
  const videosMockInfo = getVideosData()

  return data.map(video => {
    const videoMockInfo = videosMockInfo.find(mockVid => mockVid.id === video.id)

    return {
      ...video,
      likesCount: videoMockInfo.likesCount
    }
  })
}

// init videos data in LS
const initVideoRatingData = (data) => {
  const videosMockInfo = getVideosData()

  if (videosMockInfo && videosMockInfo.length === 0) {
    data.forEach(video => {
      videosMockInfo.push({
        id: video.id,
        // likesCount: getRandomLikesCount()
        likesCount: 0
      })
    })

    setVideosData(videosMockInfo)
  }
}

// init users videos data in LS
export const initUserVideos = () => {
  const userId = getCurrUserId()
  const userVideos = getUserVideos(userId)

  if (userVideos.length === 0) {
    setUserVideos(USER_VIDEOS[userId], userId)
  }
}

export const getPatchedVideos = (videos) => {
  return new Promise((resolve, reject) => {
    initVideoRatingData(videos)
    const dataPatched = patchVideosData(videos)

    resolve(dataPatched)
  })
}
