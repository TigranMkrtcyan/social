import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk"

import usersReducer from "./reducers/usersReducer"
import loginReducer from "./reducers/loginReducer"
import profileReducer from "./reducers/profileReducer"

const rootReducer = combineReducers({
    usersReducer,
    loginReducer,
    profileReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store