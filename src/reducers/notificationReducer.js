import * as constants from '../actions/types';


export const notificationRecuder = (state, action) => {
    switch (action.type) {
        case constants.SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case constants.SET_NOTIFICATION_RESPONSE:
            return {
                ...state,
                loading: false,
                error: null,
                ...action.payload
            };
        case constants.SET_NOTIFICATION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
}