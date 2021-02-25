import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useStyles} from '../../shared/styles/AddProfilePictureStyles';
import { createMuiTheme, useMediaQuery, Card, FormControl, Button } from '@material-ui/core';
import Pattern from '../../shared/styles/Pattern';
import profileImage from '../../assets/images/profile-image.png';
import axios from 'axios';
import config from '../../config/config';
import toaster from '../../helpers/toasts';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import AuthHeader from '../../components/Header/authHeader';
import Footer from '../../components/Footer';
import { useTranslation } from "react-i18next";

const { REACT_APP_BACKEND_URL } = config;
const id = JSON.parse(localStorage.getItem('userId'));

const AddProfilePicture = () => {
  const classes = useStyles();
  const theme = createMuiTheme();
  let history = useHistory();
  const { t } = useTranslation();
  const currentLng = localStorage.getItem('i18nextLng');
  
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  
  const [inputImage, setInputImage] = useState(profileImage);

    const handleFiles = async (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
          reader.onloadend = () => {
            setInputImage(reader.result)
          }
    };
    
    const handleSubmitImage = (e) => {
      e.preventDefault();
      
      if (inputImage === profileImage) {
          toaster('Image is required!', 'warn');
          return false;
      } else {
        uploadImage(inputImage);
      }
    };
    
    const uploadImage = async (inputImage) => {
      try {
        await axios.put(`${REACT_APP_BACKEND_URL}/user/addimage/${id}`, {
          image: inputImage
        }, {
          headers: {
            "Content-Type":"Application/json",
            "Accept-Language": currentLng,
            'authorization': localStorage.getItem('userToken')
          },
        }
        );
        
        toaster(t('Profile Picture added successfully!', 'success'));
        setTimeout(() => {
          history.push(`/profile`);
      }, 3000);    
    } catch (error) {
      toaster('Profile Picture not added successfully!', 'error')
      }
    };
    
  return (
    <>
    <ToastContainer 
        draggable={true}
        transition={Zoom}
        autoClose={3000}
        position={toast.POSITION.TOP_CENTER}
    />
    <AuthHeader />
    <div className = {classes.mainContainer}>
      <div
      className={classes.contactContainer}
      >
        {(matches && <Pattern />)}       
        <Card
        className={classes.pos}
        >
          <h1 className={classes.h1}>Add Profile Picture</h1>
          <div
          className={classes.root}
          >
            <div className={classes.profileBox}>
              <img src={inputImage} alt="profile" className={classes.profile}/>
            </div>
            <FormControl fullWidth className={classes.root} variant="outlined">
              <input
                type='file'
                accept="image/*"
                name='image'
                className={classes.formInput}
                style={{ marginBottom: '10px' }}
                onChange={handleFiles}
              />
              <Button
                className={classes.submitBtn}
                type='submit'
                variant="contained"
                color="primary"
                component="span"
                onClick={handleSubmitImage}
              >
                Save Profile Picture
              </Button>
            </FormControl>
          </div>
        </Card>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default AddProfilePicture;
