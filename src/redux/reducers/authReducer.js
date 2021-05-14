import { updateObject } from 'utilities'
import * as actionTypes from '../actions/actionTypes'
import { async_status } from '../constants'

const initialState = {
    auth: {
        access_token: "",
        expires_in: 0,
        token_type: "",
        scope: ""
    },
    status: async_status.__DEFAULT__
}


const updateState = (state, action) => {
    return updateObject(state, { auth: {...action.payload.auth}, status: action.payload.status })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACCESS_TOKEN_FAILED:
            return { ...state, status: async_status.__FAILED__ };
        case actionTypes.ACCESS_TOKEN_LOADING:
            return { ...state, status: async_status.__LOADING__ };
        case actionTypes.ACCESS_TOKEN_SUCCESS:
            return updateState(state, action);
        default:
            return state
    }
}

export default reducer