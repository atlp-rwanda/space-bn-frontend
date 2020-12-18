import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


const ProtectedRoute = ({component: Component, ...rest}) => {
    const { auth } = useContext(AuthContext)
    const { isAuthenticated } = auth;
    return ( 
        <Route {...rest} render={(props) => {
            if (isAuthenticated) {
                return (
                    <Component {...props}/>
                )
            }
            else {
                return <Redirect  to={{
                    pathname: "/login",
                    state: {
                        from: props.location
                    }
                }}/>
            }
        }}/>
     );
}
 
export default ProtectedRoute;