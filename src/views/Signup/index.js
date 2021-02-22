import React, { useState, useContext } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { createMuiTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Pattern from '../../shared/styles/Pattern';
import SocialBtns from '../../helpers/socialAuthBtns';
import {useStyles} from '../../shared/styles/SignupStyles';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import { SignupContext } from '../../contexts/SignupContext';
import { SET_SIGNUP_ERROR, SET_SIGNUP_LOADING, SET_SIGNUP_RESPONSE } from '../../actions/types';
import toaster from '../../helpers/toasts';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const { REACT_APP_BACKEND_URL } = process.env;

const Signup = () => {
  const classes = useStyles();
  const theme = createMuiTheme();
  const history = useHistory()
  const { dispatch } = useContext(SignupContext)
  const { t } = useTranslation();

  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const socialAuthBtns = SocialBtns()

  const [values, setValues] = useState({
    password: '',
    email: '',
    name: '',
    showPassword: false
  });
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
    
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password } = values;
    const nameArr = name.split(' ')
    const currentLng = localStorage.getItem('i18nextLng');
    const passwordRegex = /[^a-zA-Z\d\s:]/;
    dispatch({type: SET_SIGNUP_LOADING});

    if (name === '') {
      toaster(t('Name is required'), 'warn')
      return false;
    } else if (nameArr[1] === undefined) {
      toaster(t('Please provide fullname'),'warn')
      return false;
    } else if ( email === '') {
      toaster(t('Email is required'), 'warn')
      return false;
    } else if (password === '') {
      toaster(t('Password is required'), 'warn')
      return false;
    } else if (password.length < 8) {
      toaster(t('Password must be at least 8 characters'), 'warn')
      return false;
    } else if (!password.match(passwordRegex)) {
      toaster(t('Your password must be non-alphanumeric characters'), 'warn')
      return false;
    } else {
      axios.post(`${REACT_APP_BACKEND_URL}/user/signup`, {firstname: nameArr[0], lastname:nameArr[1], email, password}, {
        headers: {
          "Accept-Language": currentLng
        }
      })
      .then((result) => {
        // dispatch({type:SET_SIGNUP_RESPONSE, user: result.data.user_details, token: result.data.token});
        
        sessionStorage.setItem('signedEmail', result.data.user_details.email);
        toaster(result.data.message, 'success')
        // setAuthorization(result.data.token)
        setTimeout(() => {
          history.push('/confirm-email')
        }, 3500)
      })
      .catch((err) => {
        dispatch({type:SET_SIGNUP_ERROR, payload: err.response.data})
        toaster(err.response.data.message, 'error')
      })
    }
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
      <div className = {classes.mainContainer}>

      <div className={classes.signupContainer}>
        {(matches && <Pattern />)}       
      <Card className={classes.pos}>
        <h1 className={classes.h1}>{t('Signup')}</h1>
        <FormControl fullWidth className={classes.root} variant="outlined">
          <InputLabel htmlFor="outlined-name" data-testid="name-label">{t('Name')}</InputLabel>
          <OutlinedInput
            id="outlined-name"
            type='text'
            value={values.name}
            onChange={handleChange('name')}
            inputProps={{'data-testid':"name-value"}}           
            labelWidth={70}
          />
        </FormControl>
        <FormControl fullWidth className={classes.root} variant="outlined">
          <InputLabel htmlFor="outlined-email" data-testid="email-label">{t('Email')}</InputLabel>
          <OutlinedInput
            id="outlined-email"
            type='text'
            value={values.email}
            onChange={handleChange('email')}
            inputProps={{'data-testid':"email-value"}} 
            endAdornment={<InputAdornment position="end">@</InputAdornment>}
            labelWidth={70}
          />
        </FormControl>
        <FormControl  className={classes.root} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" data-testid="password-label">{t('Password')}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            inputProps={{'data-testid':"password-value"}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  data-testid="password-icon-toggle"
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
           <Button variant="contained" color="primary" className={classes.action} onClick={handleSubmit} data-testid="submit">{t('Signup')}</Button>
          {
            socialAuthBtns.map(socialBtn => (
              <div key={socialBtn.alt}>
                <Button variant="outlined" className={classes.btn} >
                  <img src={socialBtn.icon} alt={socialBtn.alt} className={classes.img}/>
                  <span className={classes.span}>{socialBtn.text}</span>
                </Button>
              </div>
            ))
          }
        </FormControl>    
      </Card>
      </div>
    </div>
    <Footer/>

     </>
    );
}
 
export const setAuthorization = (token) => {
  const _IdToken = token;
  localStorage.setItem("userToken", _IdToken);
  axios.defaults.headers.common = { "Authorization": `Bearer ${_IdToken}` };
}
export default Signup;