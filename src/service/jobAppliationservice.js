import axios from "service";

let jobPath = '/job/api/v1'

export const verifyJobEmail = (data)=> axios.post(`${jobPath}/otp/verifyJobAppEmail`, data)

export const refreshOtp = (data)=> axios.post(`${jobPath}/otp/sendRefreshOTP`, data)

export const validateOtp = (data)=> axios.post(`${jobPath}/otp/validateJobAppOTP`, data)

export const getPersonal = (email)=> axios.get(`${jobPath}/jobApp/personal/${email}`)

export const addPersonal = (email, data)=> axios.post(`${jobPath}/jobApp/personal/${email}`, data)

export const getEmergency = (email)=> axios.get(`${jobPath}/jobApp/emergency/${email}`)

