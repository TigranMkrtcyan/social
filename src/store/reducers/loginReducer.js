import API from "../../api/api"
import { FetchingAC } from "./usersReducer"

const LOGIN = "login"

const initState = {
    userId: null
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userId: action.payload
            }

        default:
            return state
    }
}

const loginAC = (data) => ({ type: LOGIN, payload: data })

export const loginThunk = (email, password) => {
    return (dispatch) => {
        dispatch(FetchingAC(true))
        API.login(email, password)
            .then((res) => {
                dispatch(loginAC(res.data.data.userId))
                dispatch(FetchingAC(false))
            })
    }
}
export default loginReducer