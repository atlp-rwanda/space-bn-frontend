import React from 'react';
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
export default function SignIn() {
    const classes = styles();
 
  const [values, setValues] = React.useState({
    password: '',
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

  return (
    <>
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
        <form className={classes.form}>

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