import API from "../utils/API";
import {GET_ERRORS, CLEAR_VALIDATION_ERRORS, ADD_POST, GET_POST, GET_POSTS, DELETE_POST} from "./types";

export const createPost = (postData) => dispatch => {
    dispatch(setValidationErrors({}))
    API.createPost(postData)
    .then((response) => {
        dispatch({
            type: ADD_POST,
            payload: response.data
        })
    })
    .catch((err) => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}
export const getPosts = () => dispatch => {
    API.getPosts()
    .then((response) => {
        dispatch({
            type: GET_POSTS,
            payload: response.data
        })
    })
    .catch((err) => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}

export const getPost = (id) => dispatch => {
    API.getPost(id)
    .then((response) => {
        dispatch({
            type: GET_POST,
            payload: response.data
        })
    })
    .catch((err) => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}
export const deletePost = (id) => dispatch => {
    API.deletePost(id)
    .then((response) => {
        dispatch({
            type: DELETE_POST,
            payload: response.data
        })
    })
    .catch((err) => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}
export const addCommentToPost = (id, commentData) => dispatch => {
    API.addCommentToPost(id, commentData)
    .then((response) => {
        dispatch({
            type: GET_POST,
            payload: response.data
        })
    })
    .catch((err) => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}
export const setValidationErrors = (errors) => {
    return {
        type: CLEAR_VALIDATION_ERRORS,
        payload: errors  
    }
}
