import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useStyles} from '../../shared/styles/AddFacilityStyles';
import { createMuiTheme, useMediaQuery, Card, FormControl, Button, InputLabel, InputAdornment, OutlinedInput } from '@material-ui/core';
import Pattern from '../../shared/styles/Pattern';
import axios from 'axios';
import config from '../../config/config';
import toaster from '../../helpers/toasts';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import AuthHeader from '../../components/Header/authHeader';
import Footer from '../../components/Footer';
import { useTranslation } from "react-i18next";

const { REACT_APP_BACKEND_URL } = config;

const AddFacility = () => {
  const classes = useStyles();
  const theme = createMuiTheme();
  let history = useHistory();
  const { t } = useTranslation();
  const currentLng = localStorage.getItem('i18nextLng');
  
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  
  const [inputImage, setInputImage] = useState('');
  const [values, setValues] = useState({
    city: '',
    roomNumber: '',
    roomDetails: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
      
      const { city, address, roomNumber, roomDetails } = values;
      
      if (city === '') {
          toaster('city is required!', 'warn');
          return false;
      } else if (address === '') {
          toaster('address is required!', 'warn');
          return false;
      } else if (roomNumber === '') {
          toaster('roomNumber is required!', 'warn');
          return false;
      } else if (roomDetails === '') {
          toaster('roomDetails is required!', 'warn');
          return false;
      } else if (!inputImage) {
          toaster('Image is required!', 'warn');
          return false;
      } else {
        uploadImage( city, address, roomNumber, roomDetails, inputImage);
      }
    };
    
    const uploadImage = async ( city, address, roomNumber, roomDetails, inputImage) => {
      try {
        await axios.post(`${REACT_APP_BACKEND_URL}/facility`, {
          location: city,
          address,
          roomNumber,
          roomDetails,
          image: inputImage
        }, {
          headers: {
            "Content-Type":"Application/json",
            "Accept-Language": currentLng,
            'authorization': localStorage.getItem('userToken')
          },
        }
      );
      toaster(t('Facility added successfully!', 'success'));
      setTimeout(() => {
        history.push(`/facilities`);
    }, 3000);    
    } catch (error) {
      toaster('Facility not added successfully!', 'error')
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
          <h1 className={classes.h1}>Add Facility</h1>
          <div
          className={classes.root}
          >
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-email" data-testid="email-label">Location</InputLabel>
              <OutlinedInput
              id="outlined-email"
              type='text'
              value={values.city}
              onChange={handleChange('city')}
              inputProps={{'data-testid':"email-value"}} 
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              labelWidth={80}
              />
            </FormControl>
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-name" data-testid="name-label">Address</InputLabel>
              <OutlinedInput
              id="outlined-name"
              type='text'
              value={values.address}
              onChange={handleChange('address')}
              inputProps={{'data-testid':"name-value"}} 
              endAdornment={<InputAdornment position="end">
              </InputAdornment>}
              labelWidth={150}
              />
            </FormControl>
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-name" data-testid="name-label">Room Number</InputLabel>
              <OutlinedInput
              id="outlined-name"
              type='text'
              value={values.roomNumber}
              onChange={handleChange('roomNumber')}
              inputProps={{'data-testid':"name-value"}} 
              endAdornment={<InputAdornment position="end">
              </InputAdornment>}
              labelWidth={170}
              />
            </FormControl>
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-email" data-testid="email-label">Room Details</InputLabel>
              <OutlinedInput
              id="outlined-email"
              type='text'
              value={values.roomDetails}
              onChange={handleChange('roomDetails')}
              inputProps={{'data-testid':"email-value"}} 
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              labelWidth={80}
              />
            </FormControl>
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
                Save Facility
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

export default AddFacility;
