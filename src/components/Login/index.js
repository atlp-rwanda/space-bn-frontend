import React from 'react';

const Login = () => {
    return ( 
        <div className="login-page">
        <h1>Login page</h1>
        <form>
            <label for="name">
                Name
                <input type="text" placeholder="Enter your Name" />
            </label>
            <label for="email">
                Email
                <input type="text" placeholder="Enter your Email" />
            </label>
            <label for="password">
                Password
                <input type="password" placeholder="Enter your Password" />
            </label>
            <input type="submit" value="Login" />
        </form>
        </div>
     );
}
 
export default Login;