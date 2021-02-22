import React,{useState,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Facebook from '../../assets/icons/facebook.png'
import Google from '../../assets/icons/google-logo.png'
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { styles, Heading, InputText, SocialButton, SocialText, Patten } from '../../shared/styles/LoginStyles'
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import { AuthContext } from '../../contexts/AuthContext';
import { SET_AUTHENTICATION, SET_ERROR,SET_LOADING } from '../../actions/types';
import toaster from '../../helpers/toasts';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { useTranslation } from "react-i18next";

const { REACT_APP_BACKEND_URL } = process.env;

const SignIn = () => {
    const classes = styles();
    const history = useHistory();
    const { dispatch, auth} = useContext(AuthContext);
    const { t } = useTranslation();
    const [values, setValues] = useState({
      password: '',
      email: '',
      showPassword: false,
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

      const resetpassword = async () => { 
        if(values.email === ''){
          toaster('Email must not be empty!','warn');
          return false
        }
        const currentLng = localStorage.getItem('i18nextLng');
        const response = await fetch(`${REACT_APP_BACKEND_URL}/user/resetpassword`,
        {
          method:'post',
          headers:{
            "Content-Type":"Application/json",
            "Accept-Language": currentLng
          },
          body:JSON.stringify({email:values.email})
        })
        const result = await response.json()

        if(result){

          console.log(result);

          toaster(result.message, 'success')
        }
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {email:values.email,password:values.password};
        const currentLng = localStorage.getItem('i18nextLng');

        dispatch({type: SET_LOADING, payload: true })
        if (values.email === '') {
          dispatch({type: SET_ERROR, payload: t('Email is required')})
          toaster(auth.error, 'error')
          return false
        }
        else if (values.password === '') {
          dispatch({type: SET_ERROR, payload: t('Password is required')})
          toaster(auth.error, 'error')
          return false
        } 
        const response =  await fetch(`${REACT_APP_BACKEND_URL}/user/signin`,
          {
            method:'post',
            headers:{
              "Content-Type":"Application/json",
              "Accept-Language": currentLng
            },
            body:JSON.stringify(body)
          });
          const jsonData = await response.json();
          if(jsonData.user !== undefined && jsonData.user.isVerified !== true){
              sessionStorage.setItem('signedEmail',jsonData.user.email);
              history.push('/confirm-email');
          }
          else if(jsonData.user !== undefined && jsonData.user.isVerified === true)
          {
              localStorage.setItem("userId",jsonData.user.id);
              localStorage.setItem("userRoleId",jsonData.user.roleId);
              localStorage.setItem("userToken",jsonData.token);
              localStorage.setItem("userImageUrl",jsonData.user.user_image);
              dispatch({type: SET_LOADING, payload: false })      
              dispatch({type: SET_AUTHENTICATION, user:jsonData.user, token:jsonData.token })
              toaster(t('Logged in successfully'), 'success')
              setTimeout(() => {
              history.push('/dashboard');
              }, 4000) 
          }else{
            dispatch({type: SET_LOADING, payload: false })
            dispatch({type: SET_ERROR, payload: jsonData.message})
            toaster(jsonData.message, 'error')
                      
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
    <div className={classes.mainContainer}>
    <div className={classes.signupContainer}>
    <Patten className={classes.patternMedia} />
    <Card className={classes.card}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.container}>
        <Heading>
          {t('Login')}
        </Heading>
        <form className={classes.form} onSubmit={e =>handleSubmit(e)} >

        <InputText fullWidth variant="outlined">
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
        </InputText>
        <InputText fullWidth variant="outlined">
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
            labelWidth={70}/>
        </InputText>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t("Remember me")}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            {t('Sign In')}
          </Button>

          <SocialButton
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
          >
              <img src={Facebook} alt="Facebook" className={classes.socialIcons} />
              <SocialText>{t('Continue with Facebook')}</SocialText>
          </SocialButton>
          <SocialButton
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
          >
              <img src={Google} alt="Google" className={classes.socialIcons} />
              <SocialText>{t('Continue with Google')}</SocialText>
          </SocialButton>
          <h2 style={{fontSize:14,marginTop:40}}>{t('Forgot your password ?')} <span onClick={resetpassword} style={{fontSize:16,color:'blue',marginLeft:20,cursor:"pointer",marginTop:40}}> {t("Reset Password")}</span></h2>
        </form>
      </div>
        </Container>
    </Card>
    </div>
    </div>
    <Footer/>
    </>
  );
}
export default SignIn;
