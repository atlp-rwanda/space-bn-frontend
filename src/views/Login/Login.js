import React, { useContext } from 'react';
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
import { SET_AUTHENTICATION, SET_ERROR } from '../../actions/types';
import toaster from '../../helpers/toasts';
import { toast, ToastContainer, Zoom } from 'react-toastify';


export default function SignIn() {
    const classes = styles();
    const history = useHistory();
    const { dispatch, auth } = useContext(AuthContext);

    const [values, setValues] = React.useState({
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

      const handleSubmit = (e) => {
        e.preventDefault()
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (values.email === '') {
          dispatch({type: SET_ERROR, payload: 'Email is required'})
          toaster(auth.error, 'error')
          return false
        }
        else if (values.email !== savedUser.Email) {
          dispatch({type: SET_ERROR, payload: 'invalid Email or Password'})
          toaster(auth.error, 'error')
          return false
        }
        else if (values.password === '') {
          dispatch({type: SET_ERROR, payload: 'Password is required'})
          toaster(auth.error, 'error')
          return false
        }
         else if (values.password !== savedUser.Password) {
          dispatch({type: SET_ERROR, payload: 'invalid Email or Password'})
          toaster(auth.error, 'error')
          return false
        }
          dispatch({type: SET_AUTHENTICATION})
          toaster('You are logged in', 'success')
          setTimeout(() => {
            history.push('/dashboard')
          }, 4000)   
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
          Login
        </Heading>
        <form className={classes.form} onSubmit={handleSubmit}>

        <InputText fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-email" data-testid="email-label">Email</InputLabel>
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
          <InputLabel htmlFor="outlined-adornment-password" data-testid="password-label">Password</InputLabel>
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
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

          <SocialButton
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
          >
              <img src={Facebook} alt="Facebook" className={classes.socialIcons} />
              <SocialText>Continue with facebook</SocialText>
          </SocialButton>
          <SocialButton
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
          >
              <img src={Google} alt="Google" className={classes.socialIcons} />
              <SocialText>Continue with Google</SocialText>
          </SocialButton>

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