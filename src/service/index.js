import axios from 'axios'
import { Cookies } from 'react-cookie';
import { getRefreshToken, logout } from './authService';
import https from "https"

const cookies = new Cookies();

const instance = axios.create({
  // baseURL: "/"
  // httpsAgent: new https.Agent({  
  //   rejectUnauthorized: false
  // }),
  baseURL: "http://18.188.135.202:8080"
});


export function setToken(config, idToken = '') {
  config.headers.common['Authorization'] = `Bearer ${idToken}`;
}

instance.interceptors.request.use(config => {

  //set interceptor token header
  setToken(config, cookies.get('token'));

  return config
}, error => {
  return Promise.reject(error)
});

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  async (error) => {
    if (!error.response) {
      return Promise.reject({
        response: {
          data: {
            code: 502,
            message: "Network unavailable",
            status: false,
          }
        }
      })
    }

    if (error.response.status == 401) {
      // refresh token call
      let originalCall = error.config
      try {

        let { data } = await getRefreshToken(cookies.get("refreshToken"))
        let newResult = await axios(originalCall)
          return newResult
      } catch (err) {
        logout()

      }
    } else {
      return Promise.reject(error);
    }
  });

// returns default axios config
export default instance

export const loginInstance = axios.create({
  // baseURL: "/"
  // httpsAgent: new https.Agent({  
  //   rejectUnauthorized: false
  // }),
  baseURL: "http://18.188.135.202:8080"
});


export const saveCookies = ({ token, refreshToken }, callBack) => {
  cookies.set("token", token)
  cookies.set("refreshToken", refreshToken)
  if (callBack) {
    callBack()
  }
}

export const clearCookies = (callBack)=>{
  cookies.remove("token")
  cookies.remove("refreshToken")
  localStorage.removeItem("loggedIn")
  if (callBack) {
    callBack()
  }
}