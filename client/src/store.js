import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"
import rootReducer from "./reducers";

const initialState = {};
const middleWare = [thunk]

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
<<<<<<< HEAD
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
=======
        applyMiddleware(...middleWare)
>>>>>>> 4609ea612f11308097b5ad62c873a8c513fbd471
    )
)
export default store;