import * as constants from '../actions/types';


export const signupReducer = (state, action) => {
    switch (action.type) {
        case constants.SET_SIGNUP_LOADING:
            return {
                ...state,
                loading: true
            };
        case constants.SET_SIGNUP_RESPONSE:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.user,
                token: action.token
            };
        case constants.SET_SIGNUP_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
