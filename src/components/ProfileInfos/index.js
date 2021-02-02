import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Patten } from "../../shared/styles/LoginStyles";
import { Hidden } from "@material-ui/core";
import { Button, makeStyles, Checkbox } from '@material-ui/core';
import profileImage from "../../assets/images/didace.svg";
import Typography from '@material-ui/core/Typography';
import { InputWrapper, LabelWrapper } from '../../shared/styles/ProfileInfosStyles';


const useStyles = makeStyles(theme => ({
    main: {
        marginLeft: '5%',
        marginRight: '2%',
        marginBottom: 120,
        '@media (max-width:768px)': {
            margin: '0 2% 90px 5%'
        },
    },
    paper: {
        width: '94%',
        position: 'relative',
        height: 'auto',
        padding: theme.spacing(1.4),
        marginTop: 160,
        marginBottom: 20,
        '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)': {
            width: '92%',
            height: '70vh',
            paddingTop: 50
        },
        '@media (max-width:684px)': {
            width: '100%'
        },
    },
    title: {
        color: '#726C6C',
        fontWeight: 800,
        fontFamily: `'Poppins', sans-serif;`,
        padding: theme.spacing(1.4)
    },
    paragraph: {
        paddingTop: theme.spacing(4),
        paddingRight: 100,
        paddingLeft: theme.spacing(4),
        '@media (max-width: 1024px)': {
            margin: '0 0 0 5px',
            paddingRight: '30px',
        },
        '@media (max-width:960px)': {
            margin: '0 0 0px 10px',
            padding: '5px 0 5px 10px'
        },
        '@media (max-width:768px)': {
            margin: '0 0 0px 10px',
            padding: '5px 0 5px 10px',
        },
        '@media (max-width:500px)': {
            paddingRight:0,
        },
        '@media (max-width:400px)': {
            margin: '10px 0',
        }
    },
    img: {
        width: 150,
        height: 150,
        margin: '30px 0 20px 20px',
        boerderRadius:45
        
    },
    profile: {
        paddingLeft: theme.spacing(15),
        '@media (max-width:960px)': {
            margin: '10px 10px',
            paddingLeft: theme.spacing(8),
        },
        '@media (max-width:850px)': {
            paddingLeft: 'unset',
            margin: 'auto'
        },
        '@media (max-width:600px)': {
            alignItems: 'center',
        }
    },
    button: {
        width: 186,
        background: '#2196F3',
        textAlign: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 120,
        '@media(max-width: 1111px)': {
            marginLeft: 50
        },'@media (max-width:768px)': {
            marginLeft: 50,
        },
        '@media(max-width: 400px)': {
            marginLeft: 20
        },
    },
    inputField: {
        width: '40%',
        margin: '10px 20px 0 0',
        padding: '1px 8px',
        border: '2px solid #7B7B7B',
        borderRadius: '3px',
        outline: 'none',
        '@media (max-width:960px)': {
            width: '60%',
        },
        '@media (max-width:768px)': {
            margin: '10px 15px 0 0',
            width: '70%',
        },
        '@media(max-width: 400px)': {
            margin: '8px 10px 0 0',
        },
    },
    optionField: {
        marginTop: '10px',
        width: '90px',
        paddingLeft: '2px 8px',
        border: '2px solid #7B7B7B',
        borderRadius: '4px',
        outline: "none"
    },
    lastContainer: {
        margin: '40px  0 30px 10%',
        '@media (max-width:600px)': {
            margin: '20px',
        }
    },
    consent: {
        margin: '0 auto',
        width: '800px',
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        '@media(max-width: 1024px)': {
            width: '100%'
        },
        '@media(max-width: 850px)': {
            paddingLeft: theme.spacing(0)
        },
        '@media(max-width: 600px)': {
            width: '100%',
            paddingRight: theme.spacing(0)
    }},
    confirm: {
        margin: '20px auto',
        width: 180,
        textTransform: 'capitalize',
        background: '#2196F3',
        alignSelf: 'center'
    },
    span: {
        fontFamily: `'Poppins', sans-serif;`,
        fontWeight: 'bold'
    }
}))

const ProfileInfos = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.main}>
            <Hidden only={['sm', 'xl', 'xs']}>
                <Patten style={{position: 'absolute', right: 50, marginTop:'-55px'}}/>
            </Hidden>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item direction="column" container>
                        <Typography align="center" variant="h5" className={classes.title}>Profile Information</Typography>
                        <Grid item xs={12} sm container >
                            <Grid item sm={4} direction="column" container className={classes.profile} >
                                <img src={profileImage} alt="profile" className={classes.img}/>
                                <Button variant="contained" color="primary" className={classes.button}>EDIT PROFILE PICTURE</Button>
                            </Grid>
                            <Grid item xs>
                                <Grid item>
                                    <Typography variant="subtitle1" className={classes.paragraph}>By clicking in the checkbox, you will allow the application to use your Profile Information on any travel request. </Typography>
                                </Grid>
                                <Grid item xs>
                                    <form className={classes.form}>
                                        <div>
                                            <LabelWrapper> Name:</LabelWrapper>
                                            <InputWrapper>
                                                <input type="text" className={classes.inputField} />
                                                <Checkbox color='primary' className={classes.checkboxField} />
                                            </InputWrapper>
                                        </div>
                                        <div>
                                            <LabelWrapper>Role:</LabelWrapper>
                                            <InputWrapper>
                                                <input type="text" className={classes.inputField} />
                                                <Checkbox color='primary' className={classes.checkboxField} />
                                            </InputWrapper>
                                        </div>
                                        <div>
                                            <LabelWrapper>Address:</LabelWrapper>
                                            <InputWrapper>
                                                <input type="text" className={classes.inputField} />
                                                <Checkbox color='primary' className={classes.checkboxField} />
                                            </InputWrapper>
                                        </div>
                                        <div>
                                            <LabelWrapper>Phone:</LabelWrapper>
                                            <InputWrapper>
                                                <input type="text" className={classes.inputField} />
                                                <Checkbox color='primary' className={classes.checkboxField} />
                                            </InputWrapper>
                                        </div>
                                        <div>
                                            <LabelWrapper>Email:</LabelWrapper>
                                            <InputWrapper>
                                                <input type="email" className={classes.inputField} />
                                                <Checkbox color='primary' className={classes.checkboxField} />
                                            </InputWrapper>
                                        </div>
                                        <div>
                                        <LabelWrapper>Gender:</LabelWrapper>
                                        <InputWrapper>
                                            <select
                                                className={classes.optionField}
                                            >
                                                <option>Other</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </InputWrapper>
                                        </div>
                                    </form>
                                </Grid>
                            </Grid>
                            <Grid item direction='column' container
                                className={classes.lastContainer}
                            >
                                <Typography variant="subtitle1" className={classes.consent}>
                                    By clicking <span className={classes.span}>CONFIRM DETAILS</span> button, you will allow applicaton to use your Profile Informaton on any travel request.
                                </Typography>
                                <Button variant="contained" color="primary"  className={classes.confirm}>CONFIRM DETAILS</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default ProfileInfos;