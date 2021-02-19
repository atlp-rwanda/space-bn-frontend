import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useStyles} from '../../shared/styles/AddHotelStyles';
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

const Addhotel = () => {
  const classes = useStyles();
  const theme = createMuiTheme();
  let history = useHistory();
  const { t } = useTranslation();
  const currentLng = localStorage.getItem('i18nextLng');
  
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  
  const [inputImage, setInputImage] = useState('');
  const [values, setValues] = useState({
    hotelname: '',
    hotelemail: '',
    pricerange: '',
    city: '',
    latitude: '',
    longitude: '',
    ranking: '',
    swimmingpool: '',
    parking: '',
    wifi: '',
    breakfast: '',
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
      
      const { hotelname, hotelemail, pricerange, city, latitude, longitude, ranking, swimmingpool, parking, wifi, breakfast } = values;
      
      if (hotelname === '') {
        toaster('hotelname is required!', 'warn');
        return false;
      } else if (hotelemail === '') {
          toaster('hotelemail is required!', 'warn');
          return false;
      } else if (pricerange === '') {
          toaster('pricerange is required!', 'warn');
          return false;
      } else if (latitude === '') {
          toaster('latitude is required!', 'warn');
          return false;
      } else if (longitude === '') {
          toaster('longitude is required!', 'warn');
          return false;
      } else if (city === '') {
          toaster('city is required!', 'warn');
          return false;
      } else if (ranking === '') {
          toaster('ranking is required!', 'warn');
          return false;
      } else if (swimmingpool === '') {
          toaster('swimmingpool is required!', 'warn');
          return false;
      } else if (parking === '') {
          toaster('parking is required!', 'warn');
          return false;
      } else if (wifi === '') {
          toaster('wifi is required!', 'warn');
          return false;
      } else if (breakfast === '') {
          toaster('breakfast is required!', 'warn');
          return false;
      } else if (!inputImage) {
          toaster('Image is required!', 'warn');
          return false;
      } else {
        uploadImage( hotelname, hotelemail, pricerange, city, latitude, longitude, ranking, swimmingpool, parking, wifi, breakfast, inputImage);
      }
    };
    
    const uploadImage = async ( hotelname, hotelemail, pricerange, city, latitude, longitude, ranking, swimmingpool, parking, wifi, breakfast, inputImage) => {
      try {
        await axios.post(`${REACT_APP_BACKEND_URL}/hotels`, {
          hotelname,
          hotelemail,
          pricerange,
          location: city,
          latitude,
          longitude,
          ranking,
          swimmingpool,
          parking,
          wifi,
          breakfast,
          image: inputImage
        }, {
          headers: {
            "Content-Type":"Application/json",
            "Accept-Language": currentLng,
            'authorization': localStorage.getItem('userToken')
          }
        }
        );
      toaster(t('Hotel added successfully!'), 'success');
      setTimeout(() => {
        history.push(`/hotels`);
    }, 3000);    
    } catch (error) {
      toaster('Hotel not added successfully!', 'error')
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
          <h1 className={classes.h1}>Add Hotel</h1>
          <div
          className={classes.root}
          >
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-name" data-testid="name-label">Hotel Name</InputLabel>
              <OutlinedInput
              id="outlined-name"
              type='text'
              value={values.hotelname}
              onChange={handleChange('hotelname')}
              inputProps={{'data-testid':"name-value"}} 
              endAdornment={<InputAdornment position="end">
              </InputAdornment>}
              labelWidth={80}
              />
            </FormControl>
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-email" data-testid="email-label">Hotel Email</InputLabel>
              <OutlinedInput
              id="outlined-email"
              type='text'
              value={values.hotelemail}
              onChange={handleChange('hotelemail')}
              inputProps={{'data-testid':"name-value"}} 
              endAdornment={<InputAdornment position="end">@
              </InputAdornment>}
              labelWidth={80}
              />
            </FormControl>
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-name" data-testid="name-label">Price Range</InputLabel>
              <OutlinedInput
              id="outlined-name"
              type='text'
              value={values.pricerange}
              onChange={handleChange('pricerange')}
              inputProps={{'data-testid':"name-value"}} 
              endAdornment={<InputAdornment position="end">
              </InputAdornment>}
              labelWidth={80}
              />
            </FormControl>
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
              <InputLabel htmlFor="outlined-name" data-testid="name-label">Coordinate (Latitude)</InputLabel>
              <OutlinedInput
              id="outlined-name"
              type='text'
              value={values.latitude}
              onChange={handleChange('latitude')}
              inputProps={{'data-testid':"name-value"}} 
              endAdornment={<InputAdornment position="end">
              </InputAdornment>}
              labelWidth={150}
              />
            </FormControl>
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-name" data-testid="name-label">Coordinate (Longitude)</InputLabel>
              <OutlinedInput
              id="outlined-name"
              type='text'
              value={values.longitude}
              onChange={handleChange('longitude')}
              inputProps={{'data-testid':"name-value"}} 
              endAdornment={<InputAdornment position="end">
              </InputAdornment>}
              labelWidth={170}
              />
            </FormControl>
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-email" data-testid="email-label">Ranking</InputLabel>
              <OutlinedInput
              id="outlined-email"
              type='text'
              value={values.ranking}
              onChange={handleChange('ranking')}
              inputProps={{'data-testid':"email-value"}} 
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              labelWidth={80}
              />
            </FormControl>
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-email" data-testid="email-label">Swimming Pool</InputLabel>
              <OutlinedInput
              id="outlined-email"
              type='text'
              value={values.swimmingpool}
              onChange={handleChange('swimmingpool')}
              inputProps={{'data-testid':"email-value"}} 
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              labelWidth={80}
              />
            </FormControl>
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-email" data-testid="email-label">Parking</InputLabel>
              <OutlinedInput
              id="outlined-email"
              type='text'
              value={values.parking}
              onChange={handleChange('parking')}
              inputProps={{'data-testid':"email-value"}} 
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              labelWidth={80}
              />
            </FormControl>
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-email" data-testid="email-label">Wifi</InputLabel>
              <OutlinedInput
              id="outlined-email"
              type='text'
              value={values.wifi}
              onChange={handleChange('wifi')}
              inputProps={{'data-testid':"email-value"}} 
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              labelWidth={80}
              />
            </FormControl>
            <FormControl fullWidth
            className={classes.root}
            variant="outlined">
              <InputLabel htmlFor="outlined-email" data-testid="email-label">Breakfast</InputLabel>
              <OutlinedInput
              id="outlined-email"
              type='text'
              value={values.breakfast}
              onChange={handleChange('breakfast')}
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
                Save Hotel
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

export default Addhotel;
