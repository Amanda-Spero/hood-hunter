import axios from "axios";

export default {
    login: (params) => {
        return axios.post("/api/users/login", params);
    },
    register: (params) => {
        return axios.post("/api/users/register", params);
    },
    getSearchHistory: (id) => {
        return axios.get(`/api/users/history/${id}`);
    },
    addSearchHistory: (params) => {
        return axios.post("/api/users/history", params)
    }
}