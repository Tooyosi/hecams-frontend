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

export const getEducation = (email)=> axios.get(`${jobPath}/jobApp/education/${email}`)

export const deleteEducation = (email, id)=> axios.delete(`${jobPath}/jobApp/education/${email}/${id}`)

export const addEducation = (email, data)=> axios.post(`${jobPath}/jobApp/education/${email}`, data)

export const getTask = (email)=> axios.get(`${jobPath}/jobApp/taskReview/${email}`)

export const addTask = (email, data)=> axios.post(`${jobPath}/jobApp/taskReview/${email}`, data)

export const getPastJob = (email)=> axios.get(`${jobPath}/jobApp/pastJob/${email}`)

export const deletePastJob = (email, id)=> axios.delete(`${jobPath}/jobApp/pastJob/${email}/${id}`)


export const addPastJob = (email, data)=> axios.post(`${jobPath}/jobApp/pastJob/${email}`, data)

export const getReference = (email)=> axios.get(`${jobPath}/jobApp/reference/${email}`)

export const addReference = (email, data)=> axios.post(`${jobPath}/jobApp/reference/${email}`, data)

export const downloadConsent = (email)=> axios.get(`${jobPath}/jobApp/consent/initTemplateWithData/${email}`, {
    responseType: 'blob'
})

export const addConsentSignature = (email, data)=> axios.post(`${jobPath}/jobApp/consent/addConsent/${email}`, data)

export const getAllApplications = (pageNo, pageSize)=> axios.get(`${jobPath}/jobApp/jobProcess/${pageNo}/${pageSize}`)

export const getAllApplicationTypes = ()=> axios.get(`${jobPath}/jobApp/jobProcessTypes`)



