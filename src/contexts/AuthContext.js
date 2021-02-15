/* eslint-disable */
import React, { createContext, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [auth, dispatch] = useReducer(authReducer, {   
        error: null,
        token: null,
        user:{},
        loading:null
    })

    return (
        <AuthContext.Provider value={{auth, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;