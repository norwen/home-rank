import { ID_TOKEN_KEY } from "../common/jwt.service"
const lsAppPrefix = 'home_rank_'
const userLsFieldName = `${lsAppPrefix}user`;
const videosInfoName = `${lsAppPrefix}videos`;
const userVideosName = `${lsAppPrefix}userVideos`;
import { userVideos as USER_VIDEOS } from "./userVideos";

export const saveUserData = (userData) => {
  window.localStorage.setItem(userLsFieldName, JSON.stringify(userData));
}

export const getUserData = () => {
  const data = window.localStorage.getItem(userLsFieldName);

  return JSON.parse(data);
}

export const removeUserData = (userId) => {
  window.localStorage.removeItem(userLsFieldName);
  window.localStorage.removeItem(`${ID_TOKEN_KEY}_${userId}`);
}

export const getVideosData = () => {
  const data = window.localStorage.getItem(videosInfoName);

  return (data && JSON.parse(data)) || [];
}

export const setVideosData = (videosData) => {
  window.localStorage.setItem(videosInfoName, JSON.stringify(videosData));
}

export const getUserVideos = () => {
  const userId = getCurrUserId();
  const data = window.localStorage.getItem(`${userVideosName}_${userId}`);

  return (data && JSON.parse(data)) || [];
}

export const setUserVideos = (videosData) => {
  const userId = getCurrUserId();

  window.localStorage.setItem(`${userVideosName}_${userId}`, JSON.stringify(videosData));
}

export const initUserVideos = () => {
  const userId = getCurrUserId();
  const userVideos = getUserVideos(userId);

  if(userVideos.length === 0) {
    setUserVideos(USER_VIDEOS[userId], userId)
  }
}

const getCurrUserId = () => {
  const userData = getUserData();

  return userData && userData.id;
}
