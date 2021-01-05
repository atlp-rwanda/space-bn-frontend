/* eslint-disable */
import React, { createContext, useEffect, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [auth, dispatch] = useReducer(authReducer, {error: null, isAuthenticated: false})
    const userInfo = {
        Name:'John Doe',
        Email: 'johndoe@gmail.com',
        Password: 'JohnDoe123',
        Avatar:'user avatar url',
        userType: 'REQUESTER'
    }
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userInfo))
    },[])
    return (
        <AuthContext.Provider value={{auth, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;