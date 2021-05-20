import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const api = {
  signUp: (headers, body = {}) => {
    return axios.post(`${baseURL}/user/sign-up`, body, {
      headers: headers,
    });
  },

  signOut: (headers, body = {}) => {
    return axios.post(`${baseURL}/user/sign-out`, body, {
      headers: headers,
    });
  },

  getUserById: userId => {
    return axios.get(`${baseURL}/user/${userId}`);
  },

  editUser: (headers, body = {}) => {
    return axios.patch(`${baseURL}/user/`, body, {
      headers: headers,
    });
  },

  editMedia: (headers, body = {}) => {
    return axios.patch(`${baseURL}/media/`, body, {
      headers: headers,
    });
  },

  deleteMedia: (headers, body = {}) => {
    return axios.delete(`${baseURL}/media/`, {
      headers: headers,
      data: body,
    });
  },

  uploadMedia: (headers, body = {}) => {
    return axios.post(`${baseURL}/media/upload`, body, {
      headers: headers,
    });
  },

  getMediaById: mediaId => {
    return axios.get(`${baseURL}/media/${mediaId}`);
  },

  getMediaByUserId: userId => {
    return axios.get(`${baseURL}/media/user/${userId}`);
  },

  getMedia: () => {
    return axios.get(`${baseURL}/media`);
  },

  getMemes: () => {
    return axios.get(`${baseURL}/media/memes`);
  },

  getGifs: () => {
    return axios.get(`${baseURL}/media/gifs`);
  },

  getSearchMeme: searchValue => {
    return axios.get(`${baseURL}/search/meme/${searchValue}`);
  },

  getSearchGif: searchValue => {
    return axios.get(`${baseURL}/search/gif/${searchValue}`);
  },

  getSearchUser: searchValue => {
    return axios.get(`${baseURL}/search/user/${searchValue}`);
  },
};
