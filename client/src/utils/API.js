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
    },
    createPost: (params) => {
        return axios.post("/api/posts", params)
    },
    getPosts: () => {
        return axios.get("/api/posts")
    },
    getPost: (id) => {
        return axios.get(`/api/posts/${id}`)
    },
    deletePost: (id) => {
        return axios.delete(`/api/posts/${id}`)
    },
    addCommentToPost: (id, params) => {
        return axios.post(`/api/posts/${id}`, params)
    }
}