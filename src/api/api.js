import axios from "axios";

const instance = axios.create({
    baseURL : "https://social-network.samuraijs.com/api/1.0"
})

const API = {
    getUsers(page) {
        return instance.get(`/users?count=100&page=${page}`)
    },
}

export default API