import React, { useState, useContext } from 'react';
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
import {useStyles} from '../../shared/styles/SignupStyles';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import { SignupContext } from '../../contexts/SignupContext';
import { SET_SIGNUP_LOADING} from '../../actions/types';
import toaster from '../../helpers/toasts';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import axios from "axios";

const { REACT_APP_BACKEND_URL } = process.env;

const PasswordReset = () => {

  const classes = useStyles();
  const theme = createMuiTheme();
  const history = useHistory()
  const { dispatch } = useContext(SignupContext);
  const { t } = useTranslation();


  const matches = useMediaQuery(theme.breakpoints.up('md'));
  
  const [values, setValues] = useState({
    password: '',
    newpassword:'',
    showPassword: false,
    shownewPassword: false,
    passwordStrengthVisibility:{display:'none'}
  });
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
    
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShownewPassword = () => {
    setValues({ ...values, shownewPassword: !values.shownewPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownnewPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const incomingToken = urlParams.get('token');

    console.log(incomingToken);

    const { password, newpassword } = values;

    dispatch({type: SET_SIGNUP_LOADING});
    if (password === '') {
      toaster(t('Password is required'), 'warn')
      return false;
    } else if (newpassword === '') {
      toaster(t('Please confirm the new password'), 'warn')
      return false;
    }else if (newpassword.length < 8) {
      toaster(t('Invalid Password'), 'warn')
      setValues({ ...values, passwordStrengthVisibility: {display:'block'} });
      return false;
    }else if (newpassword !== password) {
      toaster(t('Password do not match'), 'warn')
      return false;
    }
    else {
      const currentLng = localStorage.getItem('i18nextLng');
      const response = await axios.patch(`${REACT_APP_BACKEND_URL}/user/resetpassword?token=${incomingToken}`, 
      {password},
      { 
        headers:{
          "Content-Type":"Application/json",
          "Accept-Language": currentLng
        }  
      })
      if(response.status === 200){
        toaster(response.data.message, 'success')
        setTimeout(() => {
          history.push('/login')
        }, 3500)
      }

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
        <Card className={classes.pos} >
        <h1 className={classes.h1}>{t("Password Reset Form")}</h1>

        <FormControl fullWidth className={classes.root} variant="outlined">
          <InputLabel htmlFor="outlined-newpasword" data-testid="newpassword-label">{t("Enter New Password")}</InputLabel>
          <OutlinedInput
            id="outlined-newpassword"
            type={values.shownewPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            inputProps={{'data-testid':"newpassword-value"}} 
            endAdornment={
              <InputAdornment position="end">
              <IconButton
                aria-label="toggle newpassword visibility"
                onClick={handleClickShownewPassword}
                onMouseDown={handleMouseDownnewPassword}
                data-testid="newpassword-icon-toggle"
                edge="end"
              >
                {values.shownewPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
            }
            labelWidth={150}
          />
        </FormControl>
  
        <FormControl  className={classes.root} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password" data-testid="password-label">{t("Confirm New Password")}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.newpassword}
            onChange={handleChange('newpassword')}
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
            labelWidth={150}
          />

        <div className={classes.hiddenDiv} style={values.passwordStrengthVisibility}>
          <div></div>
             <div style={{display:'flex',flexDirection:'column',marginLeft:'40px'}}>
                 <h2 style={{marginTop:'30px',marginBottom:'10px', marginLeft:40}}>{t("Password strength")}</h2>
                 <ul style={{paddingBottom:15, fontSize:20, margin:'auto'}}>
                     <li>{t("Must be at least 8 characteres length")}</li>
                     <li>{t("Must contain at least one digit")}</li>
                     <li>{t("Must contain at least one capital letter")}</li>
                 </ul>
             </div>
        </div>
           <Button variant="contained" color="primary" className={classes.action} onClick={handleSubmit} data-testid="submit" style={{marginTop:70}}>{t("Save")}</Button>

        </FormControl>    
      </Card>
      </div>
    </div>
    <Footer/>

     </>
    );
}
 
export default PasswordReset;