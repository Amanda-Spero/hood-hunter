import API from "../utils/API";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import  {GET_ERRORS, SET_CURRENT_USER, CLEAR_VALIDATION_ERRORS} from "./types";
//Register User
export const registerUser = (userData, history) => dispatch => {
    API.register(userData)
    .then(response => history.push("/login"))
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    )
}

//Login - Get User Token
export const loginUser = userData => dispatch => {
    API.login(userData)
    .then(response => {
        //save to local storage
        const {token} = response.data;
        localStorage.setItem("jwtToken", token)
        //Set token to auth header
        setAuthToken(token)
        //Decode token to get user data
        const decoded = jwt_decode(token);
        //set current user
        dispatch(setCurrentUser(decoded))
    })
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    )
}

//set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false)
    dispatch(setCurrentUser({}))
}

export const setValidationErrors = (errors) => {
    return {
        type: CLEAR_VALIDATION_ERRORS,
        payload: errors  
    }
}

export const clearErrors = () => dispatch => {
    dispatch(setValidationErrors({}))
}

