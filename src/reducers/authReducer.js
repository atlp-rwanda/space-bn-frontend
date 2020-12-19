import * as constant from '../actions/types';

const initialState = {
    error: null,
    isAuthenticated: false
}
export const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case constant.SET_ERROR:
            return {
                ...state,
                error: action.payload 
            };
        case constant.SET_AUTHENTICATION:
            return {
                ...state, 
                isAuthenticated: true
            };
        case constant.SET_LOG_OUT:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
};