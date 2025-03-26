import API from "../../api/api"

const GET_USERS = 'getReducer'
const FETCHING = 'fetching'
const SIZE = 'size'

const initState = {
    users: {
        items: [],
        totalCount: 0
    },
    fetching: false,
    size : 0
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: {
                    items: action.payload.items,
                    totalCount: action.payload.totalCount
                }
            }
        case FETCHING:
            return {
                ...state,
                fetching: action.payload
            }
        case SIZE: 
            return {
                ...state,
                size : state.size + action.payload
            }
        default:
            return state
    }
}

const getUserAC = (user) => ({ type: GET_USERS, payload: user })
const FetchingAC = (bool) => ({ type: FETCHING, payload: bool })
export const changeSize = (size) => ({type : SIZE, payload : size})

export const getUserTH = (page = 1) => {
    return (dispatch) => {
        dispatch(FetchingAC(true))
        API.getUsers(page)
            .then(res => {
                dispatch(getUserAC(res.data))
                dispatch(FetchingAC(false))
            })
    }
}

export default usersReducer