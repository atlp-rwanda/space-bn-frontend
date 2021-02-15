import * as constant from '../actions/types';

const initialState = {
    error: null,
    token: null,
    user:{},
    loading:null
}
export const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case constant.SET_LOADING:
            return {
                ...state,
                loading: action.payload 
            };
        case constant.SET_ERROR:
            return {
                ...state,
                error: action.payload 
            };
        case constant.SET_AUTHENTICATION:
            return {
                ...state, 
                token: action.token,
                user:action.user
            };
        case constant.SET_LOG_OUT:
            return {
                ...state,
                token: null,
                user:null
            };
        default:
            return state;
    }
};