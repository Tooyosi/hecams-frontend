import axios from "service";

export const verifyJobEmail = (data)=> axios.post(`/jobApp/verifyJobAppEmail`, data)