import React from 'react';
import Header from '../../components/Header/index';


const confirmEmail = () => {
    const container = {
        width: '100%',
        marginTop: '10%',
        display: 'flex',

    }
    const subContainer  = {
        width: '50%',
        marginLeft: '30%',

    }
    return (
        <>
        <Header/>
        <div style={container}>
            <div style={subContainer}>
            <h1>You are almost in</h1>
            <p style={{marginTop: '3em'}}>The confimation link was sent to <a href="">patrickniyogitare28@gmail.com</a>, Please check your email to confirm</p>
            <button>Login</button>
            </div>  
        </div>
       </> 
    )
}

export default confirmEmail;