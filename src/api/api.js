import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/",
    withCredentials: true
});

export const userApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&size=${pageSize}`)
            .then(response => response.data)
    },
    unFollow(id) {
        return instance.delete(`user/follow/${id}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`user/follow/${id}`)
            .then(response => response.data)
    }
};

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    setStatus(status) {
        return instance.put(`profile/status`, { status: status })
            .then(response => response.data)
    },
    savePhoto(file) {
        let bodyFormData = new FormData();
        bodyFormData.append("file", file);

        return instance.put("profile/photo", bodyFormData, {
            headers: { "Content-Type": "multipart/form-data" }
        }) .then(response => response.data)
    }
};

export const authApi = {
    getAuthMe() {
        return instance.get("auth/me")
            .then(response => response.data)
    },
    logout() {
        return instance.get("logout")
            .then(response => {
            })
    },

    login(login, password, rememberMe) {
        let bodyFormData = new FormData();
        bodyFormData.set("login", login);
        bodyFormData.set("password", password);
        bodyFormData.set("rememberMe", rememberMe);

        return instance.post("login", bodyFormData)
            .then(rs => {
                return rs.data
            })
            .catch(e => {
                return e.response.data
            })
    },

    signup(login, email, password) {
        return instance.post("signUp", {login, email, password})
            .then(rs => {
                return rs.data;
            })
    }
};
