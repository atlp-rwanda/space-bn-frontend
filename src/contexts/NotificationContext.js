import React, { createContext, useReducer } from 'react';
import { notificationRecuder } from '../reducers/notificationReducer';

export const NotificationContext = createContext();

const initialState = {
    loading: false,
    error: null,
};

const NotificationProvider = ({ children }) => {
    const [_notifications, dispatch ] = useReducer(notificationRecuder, initialState);

    return (
        <NotificationContext.Provider value={{_notifications, dispatch}}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationProvider;