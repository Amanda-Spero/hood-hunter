import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import searchReducer from "./searchReducer";
import postReducer from "./postReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    search: searchReducer,
    post: postReducer
});