import {CLEAR_SEARCH_HISTORY, GET_SEARCH_HISTORY} from "../actions/types";
const initialState = {
    history: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SEARCH_HISTORY:
        return {
            ...state,
            history: action.payload
        }
        case CLEAR_SEARCH_HISTORY:
        return {
            ...state,
            history: null
        }
        default:
            return state
    }
}
