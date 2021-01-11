import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Pattern from '../../shared/styles/Pattern';
import {useStyles} from '../../shared/styles/ContactStyles';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import personnal_vector from "../../assets/images/Personnal_Vector.svg";
import subject_vector from "../../assets/images/Subject_Vector.svg";

const Contact = () => {
    const classes = useStyles();
    const theme = createMuiTheme();
    
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleSubmit = (e) => {
            e.preventDefault()
    }
    return ( 
        <>
            <Header/>
            <div className = {classes.mainContainer}>
            <div className={classes.contactContainer}>
            {(matches && <Pattern />)}       
                <Card className={classes.pos}>
                    <h1 className={classes.h1}>Contact Us</h1>
                <FormControl fullWidth className={classes.root} variant="outlined">
                    <InputLabel htmlFor="outlined-name" data-testid="name-label">Your Name</InputLabel>
                    <OutlinedInput
                    id="outlined-name"
                    type='text'
                    value={values.name}
                    onChange={handleChange('name')}
                    inputProps={{'data-testid':"name-value"}} 
                    endAdornment={<InputAdornment position="end">
                        <img src={personnal_vector} alt="profile" style={{ width: '15px' }}/>
                    </InputAdornment>}
                    labelWidth={80}
                    />
                </FormControl>
                <FormControl fullWidth className={classes.root} variant="outlined">
                    <InputLabel htmlFor="outlined-email" data-testid="email-label">Your Email</InputLabel>
                    <OutlinedInput
                    id="outlined-email"
                    type='text'
                    value={values.email}
                    onChange={handleChange('email')}
                    inputProps={{'data-testid':"email-value"}} 
                    endAdornment={<InputAdornment position="end">@</InputAdornment>}
                    labelWidth={80}
                    />
                </FormControl>
                <FormControl fullWidth className={classes.root} variant="outlined">
                    <InputLabel htmlFor="outlined-subject" data-testid="subject-label">Subject</InputLabel>
                    <OutlinedInput
                    id="outlined-subject"
                    type='text'
                    value={values.subject}
                    onChange={handleChange('subject')}
                    inputProps={{'data-testid':"subject-value"}} 
                    endAdornment={<InputAdornment position="end">
                        <img src={subject_vector} alt="profile" style={{ width: '15px' }}/>
                    </InputAdornment>}
                    labelWidth={60}
                    />
                </FormControl>
                <FormControl  className={classes.root} variant="outlined">
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        className={classes.textField}
                    />
                </FormControl>
                <FormControl  className={classes.root} variant="outlined">
                    <Button variant="contained" color="primary" className={classes.action} onClick={handleSubmit} data-testid="submit">Submit</Button>
                </FormControl>
                </Card>
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;