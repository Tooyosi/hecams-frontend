import axios from "service";

let jobPath = '/job/api/v1'

export const verifyJobEmail = (data)=> axios.post(`${jobPath}/otp/verifyJobAppEmail`, data)

export const refreshOtp = (data)=> axios.post(`${jobPath}/otp/sendRefreshOTP`, data)

export const validateOtp = (data)=> axios.post(`${jobPath}/otp/validateJobAppOTP`, data)

export const getPersonal = (email)=> axios.get(`${jobPath}/jobApp/personal/${email}`)

export const addPersonal = (email, data)=> axios.post(`${jobPath}/jobApp/personal/${email}`, data)

export const getEmergency = (email)=> axios.get(`${jobPath}/jobApp/emergency/${email}`)

export const addEmergency = (email, data)=> axios.post(`${jobPath}/jobApp/emergency/${email}`, data)

export const getTransport= (email)=> axios.get(`${jobPath}/jobApp/transport/${email}`)

export const addTransport= (email, data)=> axios.post(`${jobPath}/jobApp/transport/${email}`, data)

export const getAvailability = (email)=> axios.get(`${jobPath}/jobApp/availability/${email}`)

export const addAvailability = (email, data)=> axios.post(`${jobPath}/jobApp/availability/${email}`, data)




