import React from 'react';
import Header from '../../components/Header/index';
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import toaster from '../../helpers/toasts';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer, Zoom } from 'react-toastify';


const { REACT_APP_BACKEND_URL } = process.env;


const ConfirmEmail = () => {
    const history = useHistory();
    const currentLng = localStorage.getItem('i18nextLng');
    const userEmail = sessionStorage.getItem('signedEmail');
    if(!userEmail){
      history.push('/login');
    }
    const resendConfirmation = () => {
        axios.post(`${REACT_APP_BACKEND_URL}/user/resendVerificationEmail`, {email: userEmail}, {
            headers: {
              "Accept-Language": currentLng
            }
          })
          .then((result) => {
              console.log(result)
            if(result.status === 200){
                toaster(result.data.message, 'success')
            }
            else{
              toaster(result.data.message, 'error')
            }
          })
          .catch((err) => {
            toaster(err.response.data.message, 'error')
          })
    }

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
      <ToastContainer 
        draggable={true} 
        transition={Zoom} 
        autoClose={3000} 
        position={toast.POSITION.TOP_CENTER}
      />
        <Header/>
        <div style={container}>
            <div style={subContainer}>
            <h1>You are almost in</h1>
            <p style={{marginTop: '3em'}}>The confimation link was sent to <a style={{color:'#0394fc'}}  href={"mailto:"+userEmail}>{userEmail}</a>, Please check your email to confirm</p>
            <Button variant="contained" color="primary" data-testid="viewHotels-btn" style={{marginTop:'2em'}}>
                      <Link to="/login" style={{color: 'white', textDecoration: 'none'}}>Login</Link>
            </Button>
            <u style={{color: '#0394fc', display:'block', marginTop: '1.5em', cursor:'pointer'}} onClick={() => resendConfirmation()}>Resend confirmation email</u>
            </div>  
        </div>
       </> 
    )
}

export default ConfirmEmail;