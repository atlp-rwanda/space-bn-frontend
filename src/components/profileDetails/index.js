import React,{useState,useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Patten } from "../../shared/styles/LoginStyles";
import { Hidden } from "@material-ui/core";
import { Button, makeStyles } from '@material-ui/core';
import profileImage from "../../assets/images/didace 1.svg";
import Typography from '@material-ui/core/Typography';
import { InputWrapper, LabelWrapper } from '../../shared/styles/ProfileInfosStyles';

import toaster from '../../helpers/toasts';


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
        
        borderRadius:180,
        backgroundColor:'blue'
        
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
        '@media (max-width:1024px)': {
            marginLeft: 20,
            width: '70%',
            fontSize:20,
        },
        '@media(max-width: 1111px)': {
            marginLeft: 50
        },'@media (max-width:768px)': {
            marginLeft: 50,
        },
        '@media(max-width: 400px)': {
            marginLeft: 20
        },
        '@media(max-width: 375px)': {
            marginLeft: '20px',
            fontSize: 15
        },
        '@media(max-width: 414px)': {
            fontSize:15
        },
    },
    inputField: {
        width: '40%',
        margin: '10px 20px 0 0',
        padding: '1px 8px',
        border: '2px solid #7B7B7B',
        borderRadius: '3px',
        outline: 'none',
        fontSize:'20px',
        marginLeft:'60px',
        marginBottom:20,
        '@media (max-width:1024px)': {
            marginLeft: 20,
            width: '70%',
            fontSize:20,
        },
        '@media (max-width:960px)': {
            width: '60%',
        },
        '@media (max-width:768px)': {
            marginLeft: 20,
            width: '70%',
            fontSize:15,
        },
        '@media(max-width: 400px)': {
            marginLeft: '20px',
        },
        '@media(max-width: 375px)': {
            marginLeft: '60px',
        },
        '@media(max-width: 414px)': {
            marginLeft: '60px',
            fontSize:15
        },
        '@media(max-width: 448px)': {
            marginLeft: '60px',
            fontSize:15
        },
    },
    optionField: {
        marginTop: '10px',
        marginLeft:60,
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
    },
    label:{
        fontSize:'15px'
    }
}))

const ProfileInfos = () => {
    const classes = useStyles();

    const[inputFname, setInputFname] = useState("")
    const[inputLname, setInputLname] = useState("")
    const[telephone, setTelephone] = useState("")
    const[email, setemail] = useState("")
    const[origin, setOrigin] = useState("")
    //const[profession, setProfession] = useState("")
    const[gender, setGender] = useState("")
    const[identification_type, setIdentification_type] = useState("")
    const[identification_number, setIdentification_number] = useState("")
    const[showbutton, setShowbutton] = useState({display:'none'})
     
    const userId = localStorage.getItem("userProfile");

    const getInfo = async ()=>{
         console.log(userId)
        
        try {
            const response = await fetch('http://localhost:5000/user/'+ userId, {
                method:'get',
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("userProfileToken"),
                },
            } );

            const jsonData = await response.json();
                
           setInputFname(jsonData.user.firstname);
           setInputLname(jsonData.user.lastname);
           setTelephone(jsonData.user.telephone);
           setemail(jsonData.user.email);
           setOrigin(jsonData.user.origin);
           //setProfession(jsonData.user.profession);
           setGender(jsonData.user.gender);
           setIdentification_type(jsonData.user.identification_type);
           setIdentification_number(jsonData.user.identification_number);
           //setImageUrl(jsonData.user.setImageUrl);

        } catch (error) {
            console.log(error.message)
        }
    }

    const postInfo = async (e) => {
        e.preventDefault();
        const body = {firstname:inputFname,lastname:inputLname,telephone:telephone,email:email,origin:origin,setGender:gender,identification_type:identification_type,identification_number:identification_number}
 
        const response = await fetch('http://localhost:5000/user/' + userId,
        {
            method:'put',
            headers:{
                "Content-Type":"Application/json",
                "Authorization":"Bearer "+localStorage.getItem("userProfileToken")
            },
            body:JSON.stringify(body)
           });
           if(response){
               console.log(response)
               toaster('Your Profile information saved.', 'success')
           }
    }

    const imageUpload = ()=>{

    }

    useEffect(() => {
        getInfo();
    })
    
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
                                <Button variant="contained" color="primary" className={classes.button} onClick={imageUpload}>EDIT PROFILE PICTURE</Button>
                            </Grid>
                            <Grid item xs>
                                <Grid item>
                                    <Typography variant="subtitle1" className={classes.paragraph}> </Typography>
                                </Grid>
                                <Grid item xs>
                                    <form className={classes.form}>
                                        <div>
                                            <LabelWrapper> Firstname:</LabelWrapper>
                                            <InputWrapper>
                                                <input type="text" className={classes.inputField} value={inputFname} onChange={(e)=>{setInputFname(e.target.value)}} onClick={()=>{setShowbutton({display:'block'})}} />
                                                
                                            </InputWrapper>
                                        </div>
                                        <div>
                                            <LabelWrapper>Lastname:</LabelWrapper>
                                            <InputWrapper>
                                                <input type="text" className={classes.inputField} value={inputLname} onChange={(e)=>{setInputLname(e.target.value)}} onClick={()=>{setShowbutton({display:'block'})}}/>
                                                
                                            </InputWrapper>
                                        </div>
                                        <div>
                                            <LabelWrapper>Telephone:</LabelWrapper>
                                            <InputWrapper>
                                                <input type="text" className={classes.inputField} value={telephone} onChange={(e)=>{setTelephone(e.target.value)}} onClick={()=>{setShowbutton({display:'block'})}}/>
                                                
                                            </InputWrapper>
                                        </div>
                                        <div>
                                            <LabelWrapper>Email:</LabelWrapper>
                                            <InputWrapper>
                                                <input type="text" className={classes.inputField} value={email} onChange={(e)=>{setemail(e.target.value)}} onClick={()=>{setShowbutton({display:'block'})}}/>
                                                
                                            </InputWrapper>
                                        </div>
                                        <div>
                                            <LabelWrapper>Origin:</LabelWrapper>
                                            <InputWrapper>
                                                <input type="text" className={classes.inputField} value={origin} onChange={(e)=>{setOrigin(e.target.value)}} onClick={()=>{setShowbutton({display:'block'})}}/>
                                                
                                            </InputWrapper>
                                        </div>

                                        <div>
                                            <LabelWrapper>ID type:</LabelWrapper>
                                            <InputWrapper>
                                                <input type="text" className={classes.inputField} value={identification_type} onChange={(e)=>{setIdentification_type(e.target.value)}} onClick={()=>{setShowbutton({display:'block'})}}/>
                                               
                                            </InputWrapper>
                                        </div>
                                        <div>
                                            <LabelWrapper>ID number:</LabelWrapper>
                                            <InputWrapper>
                                                <input type="email" className={classes.inputField} value={identification_number} onChange={(e)=>{setIdentification_number(e.target.value)}} onClick={()=>{setShowbutton({display:'block'})}}/>
                                                
                                            </InputWrapper>
                                        </div>
                                        <div>
                                        <LabelWrapper>Gender:</LabelWrapper>
                                        <InputWrapper onClick={()=>{setShowbutton({display:'block'})}} value={gender}>
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
                                <Typography variant="subtitle1" className={classes.consent} style={showbutton}>
                                     Click <span className={classes.span}>CONFIRM CHANGES</span> to save the changes you made to your profile information.
                                </Typography>
                                <Button variant="contained" color="primary"  className={classes.confirm} onClick={e => {postInfo(e)}} style={showbutton}>CONFIRM CHANGES</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default ProfileInfos;


