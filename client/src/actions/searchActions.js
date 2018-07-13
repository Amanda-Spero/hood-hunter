import API from "../utils/API";
import  {GET_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY} from "./types";

export const getSearchHistory = (userID) => dispatch => {
    API.getSearchHistory(userID)
    .then((response) => {
        dispatch({
            type: GET_SEARCH_HISTORY,
            payload: response.data
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

export const addSearchHistory = (userData) => dispatch => {
    API.addSearchHistory(userData)
    .then((response) =>{
        console.log(response.data)
    })
    .catch((err) => {
        console.log(err.response.data)
    })
}

export const clearSearchHistory = () => dispatch => {
    dispatch({type: CLEAR_SEARCH_HISTORY})
}
