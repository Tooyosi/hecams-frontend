import axios from "service";

let jobPath = '/job/api/v1'

export const verifyJobEmail = (data)=> axios.post(`${jobPath}/jobApp/verifyJobAppEmail`, data)

export const refreshOtp = (data)=> axios.post(`${jobPath}/jobApp/sendRefreshOTP`, data)

export const validateOtp = (data)=> axios.post(`${jobPath}/jobApp/sendRefreshOTP`, data)