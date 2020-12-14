import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Heading, styles} from '../../shared/styles/AboutStyles'
import Pattern from '../../shared/styles/Pattern'
import HotelImage from '../../assets/images/hotelimage.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carousel from 'react-elastic-carousel'
import CardTestmonial from './CardTest'
import img1 from '../../assets/images/1-intro-photo-final 1.png'
import img2 from '../../assets/images/testmoniol.jpg'
import img3 from '../../assets/images/bill.jpg'
import { useTranslation } from "react-i18next";

export default function About() {
  const classes = styles();
  const { t } = useTranslation();
  
  return (
    <>
    <Header />
    <div className={classes.pageContainer}>       
    <Grid container spacing={1} >
        <Grid container xs={12} md={6} item={true}>
          <Heading data-testid="heading">{t('Welcome to Barefoot Nomad')},</Heading>
          <p className={classes.paragraph}>
            {t('We make company global travel and accommodation easy and convenient for the strong workforce of savvy members of staff, by leveraging the modern web')}.
          </p>          
          <Carousel itemsToShow={3} showArrows={false} itemPadding={[5,5,5,5]} enableAutoPlay>
            <CardTestmonial image={img1} text={t('Always available to provide accomodation. Very knowledgeable about the services they provide. Would recommend to anyone')}/>
            <CardTestmonial image={img2} text={t('Greatest appreciation to Barefoot nomad. accomodation is what we wanted, and were thrilled with the customer care your team exercised')}/>
            <CardTestmonial image={img3} text={t('Always available to provide accomodation. Very knowledgeable about the services they provide. Would recommend to anyone')}/>
            <CardTestmonial image={img2} text={t('Greatest appreciation to Barefoot nomad. accomodation is what we wanted, and were thrilled with the customer care your team exercised')}/>
            <CardTestmonial image={img3} text={t('Always available to provide accomodation. Very knowledgeable about the services they provide. Would recommend to anyone')}/>
            <CardTestmonial image={img1} text={t('Greatest appreciation to Barefoot nomad. accomodation is what we wanted, and were thrilled with the customer care your team exercised')}/>
            <CardTestmonial image={img3} text={t('Greatest appreciation to Barefoot nomad. accomodation is what we wanted, and were thrilled with the customer care your team exercised')}/>
          </Carousel>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.bookButton}
            href="/hotel"
            >
            {t('Book now')}
          </Button>
        </Grid>
        <Grid container xs={12} md={6} item={true}>         
          <div className={classes.righside}>
            <div className={classes.patterna}>
              <Pattern className={classes.hotelContaine}/>
            </div>
            <div className={classes.hotelContainer}>
              <img src={HotelImage} className={classes.hotelImage} alt="hotel"/>
            </div>
        </div>
        </Grid>
    </Grid> 
    </div>
    <Footer/>  
    </>
  );
}