import axios,{ loginInstance, clearCookies } from "service";

export const login = (data) => loginInstance.post(`/uaa/api/authenticate`, data)

export const getRefreshToken = (refreshToken)=> axios.get(`uaa/api/resetToken/${refreshToken}`)

export const logout = (path)=> {
    clearCookies(()=>{
        window.location.href = path || '/login'
    })
}