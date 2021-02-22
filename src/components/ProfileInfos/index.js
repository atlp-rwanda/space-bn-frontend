import {React,useState,useEffect} from 'react' ;
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Patten } from "../../shared/styles/LoginStyles";
import { Hidden } from "@material-ui/core";
import { Button, makeStyles, Checkbox } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { InputWrapper, LabelWrapper } from '../../shared/styles/ProfileInfosStyles';

const { REACT_APP_BACKEND_URL } = process.env;


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
        width: 180,
        height: 180, 
        borderRadius:180
        
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
        fontSize:20,
        marginLeft: 120,
        marginBottom:20,
        '@media(max-width: 1111px)': {
            marginLeft: 50
        },'@media (max-width:768px)': {
            marginLeft: 50,
        },

        '@media(max-width: 400px)': {
            marginLeft: 20
        },
        '@media(max-width: 375px)': {
            fontSize:15,
            marginLeft:'20px',
            marginBottom:20,
        },
        '@media(max-width: 414px)': {
            fontSize:16,
            marginLeft:'20px',
            marginBottom:20,
        },
        '@media(max-width: 320px)': {
            fontSize:12,
            marginLeft:'20px',
            marginBottom:20,
        },
        '@media(max-width: 448px)': {
            fontSize:15,
            marginLeft:'10px',
            marginBottom:20,
        },
        '@media(max-width: 360px)': {
            fontSize:13,
            marginLeft:'10px',
            marginBottom:20,
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
        marginLeft:60,
        width: '90px',
        paddingLeft: '2px 8px',
        border: '2px solid #7B7B7B',
        borderRadius: '4px',
        outline: "none",
        '@media(max-width: 850px)': {
            fontSize:15,
            marginLeft:'20px',
            marginBottom:20,
        },
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
    },
    label:{
        fontSize:20,
        marginLeft:'80px',
        marginBottom:20,
        '@media(max-width: 850px)': {
            fontSize:15,
            marginLeft:'20px',
            marginBottom:20,
        },
        '@media(max-width: 448px)': {
            fontSize:15,
            marginLeft:'10px',
            marginBottom:20,
        },
        '@media(max-width: 375px)': {
            fontSize:15,
            marginLeft:'20px',
            marginBottom:20,
        },
        '@media(max-width: 320px)': {
            fontSize:10,
            marginLeft:'10px',
            marginBottom:20,
        },
        '@media(max-width: 360px)': {
            fontSize:12,
            marginLeft:'10px',
            marginBottom:20,
        },

    },
    checkboxField:{
        marginLeft:20,

    }
}))



const ProfileInfos = () => {
    const classes = useStyles();

    const[inputFname, setInputFname] = useState("")
    const[inputLname, setInputLname] = useState("")
    const[telephone, setTelephone] = useState("")
    const[email, setemail] = useState("")
    const[origin, setOrigin] = useState("")
    const[gender, setGender] = useState("")
    const[identification_type, setIdentification_type] = useState("")
    const[identification_number, setIdentification_number] = useState("")
    const[imageUrl, setImageUrl] = useState("")
   

    const getInfo = async ()=>{

        const userId = localStorage.getItem("userId");
        let incomingUserToken = localStorage.getItem("userToken").substr(4);;
        try {
            const response = await fetch(`${REACT_APP_BACKEND_URL}/user/${userId}`,
            {
                headers:{
                    "Authorization":"Bearer "+ incomingUserToken,
                }
            });

           const jsonData = await response.json();
                
           setInputFname(jsonData.user.firstname);
           setInputLname(jsonData.user.lastname);
           setTelephone(jsonData.user.telephone);
           setemail(jsonData.user.email);
           setOrigin(jsonData.user.origin);
           setGender(jsonData.user.gender);
           setIdentification_type(jsonData.user.identification_type);
           setIdentification_number(jsonData.user.identification_number);
           setImageUrl(jsonData.user.user_image);

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {

        getInfo();
    }, [ ])
    
    return (
        <div className={classes.main}>
            <Hidden only={['sm', 'xl', 'xs']}>
                <Patten style={{position: 'absolute', right: 50, marginTop:'-55px'}}/>
            </Hidden>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item direction="column" container>
                        <Typography align="center" variant="h5" className={classes.title}>Welcome {inputFname} to your Profile Information</Typography>
                        <Grid item xs={12} sm container >
                            <Grid item sm={4} direction="column" container className={classes.profile} >
                                <img src={imageUrl} alt="profile" className={classes.img}/>
                                <Button variant="contained" color="primary" className={classes.button} style={{display:'none'}} >EDIT PROFILE PICTURE</Button>
                            </Grid>
                            <Grid item xs>
                                <Grid item>
                                    <Typography variant="subtitle1" className={classes.paragraph}> </Typography>
                                </Grid>
                                <Grid item xs>
                                    <form className={classes.form}>
                                        <div> 
                                            <Checkbox color='primary' className={classes.checkboxField} />                                        
                                            <LabelWrapper> Firstname:</LabelWrapper>
                                            
                                               
                                                <label style={{marginLeft:140}} className={classes.label}>{inputFname}</label>
                                                
                                            
                                        </div>
                                        <div>
                                            <Checkbox color='primary' className={classes.checkboxField} />  
                                            <LabelWrapper>Lastname:</LabelWrapper>
                                            
                                            <label style={{marginLeft:140}} className={classes.label}>{inputLname}</label>
                                            
                                           
                                        </div>
                                        <div>
                                            <Checkbox color='primary' className={classes.checkboxField} />
                                            <LabelWrapper>Telephone:</LabelWrapper>
                                           
                                            <label style={{marginLeft:140}} className={classes.label}>{telephone}</label>
                                                
                                            
                                        </div>
                                        <div>
                                           <Checkbox color='primary' className={classes.checkboxField} />
                                            <LabelWrapper>Email:</LabelWrapper>
                                        
                                            <label style={{marginLeft:140}} className={classes.label}>{email}</label>
                                                
                                            
                                        </div>
                                        <div>
                                            <Checkbox color='primary' className={classes.checkboxField} />
                                            <LabelWrapper>Origin:</LabelWrapper>
                                           
                                            <label style={{marginLeft:140}} className={classes.label}>{origin}</label>
                                                
                                            
                                        </div>

                                        <div>
                                            <Checkbox color='primary' className={classes.checkboxField} />
                                            <LabelWrapper>ID Type:</LabelWrapper>
                                           
                                            <label style={{marginLeft:140}} className={classes.label}>{identification_type}</label>
                                               
                                          
                                        </div>
                                        <div>
                                            <Checkbox color='primary' className={classes.checkboxField} />
                                            <LabelWrapper>ID Number:</LabelWrapper>
                                            
                                            <label style={{marginLeft:140}} className={classes.label}>1{identification_number}</label>
                                               
                                            
                                        </div>
                                        <div>
                                            <Checkbox color='primary' className={classes.checkboxField} />
                                            <LabelWrapper>Image URL:</LabelWrapper>
                                            
                                            <label style={{marginLeft:140}} className={classes.label} style={{fontSize:13}}>{imageUrl}</label>
                                                
                                            
                                        </div>
                                        <div>
                                        <LabelWrapper>Gender:</LabelWrapper>
                                        <InputWrapper>
                                            <select className={classes.optionField} value={gender}>
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
                                    By <span className={classes.span}>CHECKING</span> the checkbox above, you will allow application to use the corresponding Informaton on any travel request.
                                </Typography>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default ProfileInfos;