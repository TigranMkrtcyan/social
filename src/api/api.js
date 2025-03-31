import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials : true,
    headers : {
        "API-KEY" : "09ecc4c8-5877-40f4-886c-0a126efd4d4f"
   }
})

const API = {
    getUsers(page = 1) {
        return instance.get(`/users?count=100&page=${page}`)
    },
    login(email, password) {
        return instance.post("/auth/login", { email, password })
    },
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
    },
    logout() {
        return instance.delete("/auth/login")
    },
    changePhoto(file) {
        const formData = new FormData()
        formData.append("file" , file)
        return instance.put("/profile/photo", formData)
    }
}

export default API      