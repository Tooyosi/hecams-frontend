import { getToken, login } from "../../services/authService"
import * as actionTypes from "../actions/actionTypes"
import { async_status } from "../constants"

export const setOauthToken = (data) => {
    return dispatch => {

        localStorage.setItem("token", data.access_token)
        localStorage.setItem("tokenParams", JSON.stringify(data))
        return Promise.resolve(dispatch({
            type: actionTypes.ACCESS_TOKEN_SUCCESS,
            payload: {
                auth: data,
                status: async_status.__LOADED__
            }
        }))

    }
}
export const getOauthToken = () => {
    return dispatch => {
        dispatch({ type: actionTypes.ACCESS_TOKEN_LOADING })
        return getToken()
            .then((response) => {

                // set the token
                localStorage.setItem("token", response ?.data ?.access_token)
                return Promise.resolve(dispatch({
                    type: actionTypes.ACCESS_TOKEN_SUCCESS,
                    payload: {
                        auth: response.data,
                        status: async_status.__LOADED__
                    }
                }))
            }).catch((err) => {
                return Promise.reject(dispatch({
                    type: actionTypes.ACCESS_TOKEN_FAILED,
                    status: async_status.__FAILED__,
                    ...err.response ?.data
                }))
            })
    }
}

export const doSignIn = (data) => {
    return dispatch => {
        dispatch({ type: actionTypes.AUTHENTICATION_LOADING })
        return login(data)
            .then((response) => {
                return Promise.resolve(dispatch({
                    type: actionTypes.AUTHENTICATION_SUCCESS,
                    payload: {
                        user: response.data.record,
                        status: async_status.__LOADED__
                    }
                }))
            }).catch((err) => {
                return Promise.reject(dispatch({
                    type: actionTypes.AUTHENTICATION_FAILED,
                    status: async_status.__FAILED__,
                    ...err.response ?.data
                }))
            })
    }
}