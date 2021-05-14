import * as actionTypes from '../actions/actionTypes'
import { async_status } from '../constants'
import { updateObject } from 'utilities'

const initialState = {
    user: {
        id: 0,
        user: {
            id: 0,
            last_login: null,
            is_superuser: false,
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            is_staff: false,
            is_active: true,
            date_joined: "",
            groups: [],
            user_permissions: []
        }
    },
    status: async_status.__DEFAULT__
}


const updateState = (state, action) => {
    return updateObject(state, { user: {...action.payload.user}, status: action.payload.status })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTHENTICATION_FAILED:
            return { ...state, status: async_status.__FAILED__ };
        case actionTypes.AUTHENTICATION_LOADING:
            return { ...state, status: async_status.__LOADING__ };
        case actionTypes.AUTHENTICATION_SUCCESS:
            return updateState(state, action);
        default:
            return state
    }
}

export default reducer