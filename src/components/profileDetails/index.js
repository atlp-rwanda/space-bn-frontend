import {React,useState,useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Patten } from "../../shared/styles/LoginStyles";
import { Hidden } from "@material-ui/core";
import {Button, makeStyles } from '@material-ui/core';
import profileImage1 from "../../assets/images/profile_photo.svg";
import uploadImage from "../../assets/images/Upload.png";
import Typography from '@material-ui/core/Typography';
import { InputWrapper} from '../../shared/styles/ProfileInfosStyles';

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
        width: 150,
        height: 150,
        
        borderRadius: '50%'
        
    },
    profile: {
        width:200,
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
        width: 150,
        background: 'E0E0E0',
        textAlign: 'center',
        fontSize:'15px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 120,
        marginTop:20,
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
        padding: '10px 8px',
        border: '2px solid #7B7B7B',
        borderRadius: '3px',
        marginLeft:'100px',
        outline: 'none',
        fontSize:15,
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
        marginLeft:'100px',
        outline: "none",
        display:"none"
        
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
        width: 150,
        marginRight:'20px',
        marginBottom:'40px',
        marginLeft:'80px',
        textTransform: 'capitalize',
        background: '#2196F3'
    },
    span: {
        fontFamily: `'Poppins', sans-serif;`,
        fontWeight: 'bold'
    },
    label: {
        fontFamily: `'Poppins', sans-serif;`,
        fontWeight: 'bold',
        position: 'absolute',
        paddingright: '30px',
        fontSize:'18px',
        marginRight:10
    },
    userInfo:{
        marginLeft: '120px',
        fontSize:'18px'
        },
    formDiv:{
        marginTop: '20px',
        marginRight:'20px'
     },
     middle:{
        display:"flex",
        flexDirection:"column"
     },
     uploadbutton:{
         width:180,
         cursor:'pointer'
         
     },
     toastcontainer:{
        top: '30px',
        right: '20px',
        left: 'auto'
    }

}))

const ProfileInfos = () => {

    const classes = useStyles();

    const[inputFname, setInputFname] = useState("")
    const[inputLname, setInputLname] = useState("")
    const[telephone, setTelephone] = useState("")
    const[email, setemail] = useState("")
    const[origin, setOrigin] = useState("")
    const[profession, setProfession] = useState("")
    //const[gender, setGender] = useState("")
    const[identification_type, setIdentification_type] = useState("")
    const[identification_number, setIdentification_number] = useState("")
    const[profileImage, setProfileImage] = useState("")
    const[imageUrl, setImageUrl] = useState("")

    const[labelHidden, setLabelHidden] = useState({display:'block'})
    const[input, setInput] = useState({display:'none'})

    const uploadImage = ()=>{
        
        const data = new FormData();
        data.append("file",profileImage);
        data.append("upload_preset", "instagram-clone");
        data.append("cloud_name", "dazayujls")
        fetch("https://api.cloudinary.com/v1_1/dazayujls/image/upload/", {
            method:"post",
            body:data
        }).then((data)=>{
            console.log(data.url)
            setImageUrl(data.url)
            return data.url
        })
        
    }
/*
     const getInfo = async ()=>{
         try {
            const response = await fetch('http://localhost:5000/user/1');
            const jsonData = await response.json();

            setInputFname(jsonData.user.firstname);
            setInputLname(jsonData.user.lastname);
            setTelephone(jsonData.user.telephone);
            setemail(jsonData.user.email);
            setOrigin(jsonData.user.origin);
            setProfession(jsonData.user.profession);
            //setGender(jsonData.user.gender);
            setIdentification_type(jsonData.user.identification_type);
            setIdentification_number(jsonData.user.identification_number);
            setImageUrl(jsonData.user.setImageUrl);

         } catch (error) {
             console.log(error.message)
         }
     }

     const postInfo = async (e) => {
         e.preventDefault();

         const body = {firstname:inputFname,lastname:inputLname,telephone:telephone,email:email,origin:origin,profession:profession,identification_type:identification_type,identification_number:setIdentification_number}

         const response = await fetch('http://localhost:5000/user/1',
         {
             method:'PUT',
             headers:{"Content-Type":"Application/json"},
             body:JSON.stringify(body)
            });
            if(response){
                toaster('Your Profile information saved.', 'success')
            }
     }

*/

    const EditInput = ()=>{
        return input
    }

    const EditInfo = ()=>{
        return labelHidden
    }

    useEffect(() => {
       // getInfo();
    }, [ ])

    const editUserInfo = ()=>{
      setLabelHidden({display:'none'});
      setInput({display:'block'});
      
    }
    
    return (
        <div className={classes.main}>
            <Hidden only={['sm', 'xl', 'xs']}>
                <Patten style={{position: 'absolute', right: 50, marginTop:'-55px'}}/>
            </Hidden>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item direction="column" container>
                        <div style={{display:"flex",justifyContent:"space-between",marginTop:40}}>
                        <div></div>
                        <Typography align="center" variant="h5" className={classes.title}>Your Profile Information Details</Typography>

                        <Button variant="contained" color="primary"  className={classes.confirm} onClick={editUserInfo} >Edit</Button>
                        </div>
                        <div style={{marginTop:'40px'}}>
                        <Grid item xs={12} sm container >
                            <Grid item sm={4} direction="column" container className={classes.profile} >
                                <img src={profileImage1} alt="profile" className={classes.img}/>
                                <input  type="file" alt="upload Image" className={classes.uploadbutton} onChange={(e)=>{setProfileImage(e.target.files[0])}} onClick={()=>uploadImage()}/>
                            </Grid>
                            <Grid item xs>
                                <Grid item xs>
                    
                                <form className={classes.form}>
                                        <div>
                                            <label className={classes.label}> Firstname:</label>
                                            <InputWrapper>
                                                <label className={classes.userInfo} style={EditInfo()} >{inputFname}</label>
                                                <input className={classes.inputField} value={inputFname} style={EditInput()} onChange={(e)=>{setInputFname(e.target.value)}}/>
                                            </InputWrapper>
                                        </div>
                                        <div className={classes.formDiv}>
                                            <label className={classes.label}>Lastname:</label>
                                            <InputWrapper>
                                                <label className={classes.userInfo} style={EditInfo()} >{inputLname}</label>
                                                <input className={classes.inputField} value={inputLname} style={EditInput()} onChange={(e)=>{setInputLname(e.target.value)}} />
                                            </InputWrapper>
                                        </div>
                                        <div className={classes.formDiv}>
                                            <label className={classes.label}>Telephone:</label>
                                            <InputWrapper>
                                                <label className={classes.userInfo} style={EditInfo()}>{telephone}</label>
                                                <input className={classes.inputField} style={EditInput()} value={telephone} onChange={(e)=>{setTelephone(e.target.value)}}/>
                                            </InputWrapper>
                                        </div>
                                        <div className={classes.formDiv}>
                                            <label className={classes.label}>Email:</label>
                                            <InputWrapper>
                                                <label className={classes.userInfo} style={EditInfo()}>{email}</label>
                                                <input className={classes.inputField} style={EditInput()} value={email} onChange={(e)=>{setemail(e.target.value)}} />
                                            </InputWrapper>
                                        </div>
                                        <div className={classes.formDiv}>
                                            <label className={classes.label}>Origin:</label>
                                            <InputWrapper>
                                                <label className={classes.userInfo} style={EditInfo()}>{origin}</label>
                                                <input className={classes.inputField} style={EditInput()} value={origin} onChange={(e)=>{setOrigin(e.target.value)}} />
                                            </InputWrapper>
                                        </div>
                                        <div className={classes.formDiv}>
                                            <label className={classes.label}>Profession:</label>
                                            <InputWrapper>
                                                <label className={classes.userInfo} style={EditInfo()}>{profession}</label>
                                                <input className={classes.inputField} style={EditInput()} value={profession} onChange={(e)=>{setProfession(e.target.value)}}/>
                                            </InputWrapper>
                                        </div>

                                        <div className={classes.formDiv}>
                                        <label className={classes.label}>ID type:</label>
                                        <InputWrapper>
                                            <label className={classes.userInfo} style={EditInfo()} >{identification_type}</label>
                                            <select className={classes.optionField} style={EditInput()} value={identification_type} onChange={(e)=>{setIdentification_type(e.target.value)}}>
                                                <option>ID</option>
                                                <option>Passport</option>
                                            </select>
                                        </InputWrapper>
                                        </div>
                                        <div className={classes.formDiv}>
                                            <label className={classes.label}>ID Number:</label>
                                            <InputWrapper>
                                                <label className={classes.userInfo} style={EditInfo()}>1{identification_number}</label>
                                                <input className={classes.inputField} style={EditInput()} value={identification_number} onChange={(e)=>{setIdentification_number(e.target.value)}}/>
                                            </InputWrapper>
                                        </div>
                                  </form>
                                  </Grid>
                            </Grid>

                        </Grid>
                        </div>
                        <Grid style={{display:"flex",justifyContent:"space-between",marginTop:'10px'}}>
                        <Typography align="center" variant="h5" className={classes.title}></Typography>
                        <Button variant="contained" color="primary"  className={classes.confirm}  >SAVE</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}


export default ProfileInfos;