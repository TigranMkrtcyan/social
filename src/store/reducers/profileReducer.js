import API from "../../api/api"
import { FetchingAC } from "./usersReducer"

const GET_PROFILE = 'GET_PROFILE'

const initState = {
    profile: {},
    loading: true,
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                loading: false,
                profile: action.payload
            }

        default:
            return state
    }
}

const getprofileAC = (data) => ({ type: GET_PROFILE, payload: data })

export const getprofileThunk = (userId) => {
    return (dispatch) => {
        dispatch(FetchingAC(true))
        API.getProfile(userId)
            .then(res => {
                dispatch(getprofileAC(res.data))
                dispatch(FetchingAC(false))
            })
    }
}

export default profileReducer

