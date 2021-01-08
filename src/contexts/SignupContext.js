import React, { createContext, useReducer } from 'react';
import { signupReducer } from '../reducers/signupReducer';


export const SignupContext = createContext();

const initialState = {
    loading: false,
    user: {},
    error: null,
    token: null
}

const SignupContextProvider = (props) => {
    const [signupAuth, dispatch] = useReducer(signupReducer, initialState)
    return ( 
        <SignupContext.Provider value={{signupAuth, dispatch}}>
            {props.children}
        </SignupContext.Provider>
     );
}
 
export default SignupContextProvider;