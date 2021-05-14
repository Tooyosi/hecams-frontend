import { getToken, login } from "../../services/authService"
import * as actionTypes from "../actions/actionTypes"
import { async_status } from "../constants"
export const setUser = (userObj) => {
    return dispatch => {
    return Promise.resolve(dispatch({
            type: actionTypes.AUTHENTICATION_SUCCESS,
            payload: {
                user: userObj,
                status: async_status.__LOADED__
            }
        }))
    }
}