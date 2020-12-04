import React, { useState } from 'react';
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
import socialAuthBtns from '../../helpers/socialAuthBtns';
import {useStyles} from '../../shared/styles/SignupStyles';

const Signup = () => {
  const classes = useStyles();
  const theme = createMuiTheme();

  const matches = useMediaQuery(theme.breakpoints.up('md'));
  
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
  }
  return ( 
      <div className={classes.signupContainer}>
        {(matches && <Pattern />)}       
      <Card className={classes.pos}>
        <h1 className={classes.h1}>Signup</h1>
        <FormControl fullWidth className={classes.root} variant="outlined">
          <InputLabel htmlFor="outlined-name" data-testid="name-label">Name</InputLabel>
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
        </FormControl>
        <FormControl  className={classes.root} variant="outlined">
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
            labelWidth={70}
          />
           <Button variant="contained" color="primary" className={classes.action} onClick={handleSubmit} data-testid="submit">Signup</Button>
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
    );
}
 
export default Signup;