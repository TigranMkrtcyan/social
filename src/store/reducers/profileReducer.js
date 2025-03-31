import API from "../../api/api"
import { FetchingAC } from "./usersReducer"

const GET_PROFILE = 'GET_PROFILE'
const CHANGE_PHOTO = 'CHANGE_PHOTO'

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
        case CHANGE_PHOTO:
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state
    }
}

const getprofileAC = (data) => ({ type: GET_PROFILE, payload: data })
const changephotoAC = (newdata) => ({ type: CHANGE_PHOTO, payload: newdata })

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

export const changephotoThunk = (file) => {
    return (dispatch) => {
        dispatch(FetchingAC(true))
        API.changePhoto(file)
            .then(res => {
                dispatch(changephotoAC(res.data))
                dispatch(FetchingAC(false))
            })
    }
}

export default profileReducer

