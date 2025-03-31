import API from "../../api/api"
import { FetchingAC } from "./usersReducer"

const LOGIN = "login"
const USER = "user"
const LOGOUT = "LOGOUT"

const initState = {
    userId: localStorage.getItem("userId") || null,
    user: JSON.parse(localStorage.getItem("user")) || null
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userId: action.payload,
            }
        case USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                userId: null,
                user : null
            }
        default:
            return state
    }
}

const loginAC = (data) => ({ type: LOGIN, payload: data })
const UserAC = (data) => ({type : USER, payload : data})
export const logoutAC = () => ({ type: LOGOUT });

export const loginThunk = (email, password) => {
    return (dispatch) => {
        dispatch(FetchingAC(true))
        API.login(email, password)
            .then((res) => {
                dispatch(loginAC(res.data.data.userId))
                dispatch(FetchingAC(false))
                localStorage.setItem("userId", res.data.data.userId)
                API.getProfile(res.data.data.userId)
                    .then(res => {
                        dispatch(UserAC(res.data))
                        localStorage.setItem("user", JSON.stringify(res.data))
                    })
            })
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        dispatch(FetchingAC(true));
        API.logout()
            .then(() => {
                dispatch(logoutAC());
                localStorage.removeItem("userId");
                localStorage.removeItem("user");
            })
    };
};

export default loginReducer