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

  uploadMedia: (headers, body = {}) => {
    return axios.post(`${baseURL}/media/upload`, body, {
      headers: headers,
    });
  },

  getMedia: () => {
    return axios.get(`${baseURL}/media`);
  },
};
