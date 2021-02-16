import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/land-img-1.png';
import image2 from '../../assets/images/land-img-2.png';
import image3 from '../../assets/images/land-img-3.png';
import image4 from '../../assets/images/land-img-4.png';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import {
  ContainerFluid,BodyContainer, HighrightWrapper, HeadingWrapper,
  ButtonsWrapper, ImagesWrapper, SubImagesWrapper, MainContainer
} from '../../shared/styles/HomeStyles';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
     return ( 
       <>
        <Header />
          <MainContainer>
          <ContainerFluid>
              <BodyContainer>
                  <HighrightWrapper>
                    <HeadingWrapper>
                    <h1>{t('TRAVEL BOOKINGS')}</h1>
                    <h1>{t('MADE EASY')}</h1>
                      <ul>
                        <li>{t('Comfort')}</li>
                        <li>{t('Food')}</li>
                        <li>{t('Luxury')}</li>
                      </ul>
                    </HeadingWrapper>
                    <ButtonsWrapper>
                    <Button variant="contained" color="primary" data-testid="viewHotels-btn">
                      <Link to="/hotel" style={{color: 'white', textDecoration: 'none'}}>{t('View Hotels')}</Link>
                    </Button>
                    <Button variant="contained" color="primary" data-testid="contactUs-btn">
                      {t('Contact Us')}
                    </Button>
                    </ButtonsWrapper>
                  </HighrightWrapper>
                  <ImagesWrapper>
                    <SubImagesWrapper>
                      <img src={image1} alt="hotel internal view img"/>
                      <img src={image2} alt="hotel internal view img"/>
                      <img src={image3} alt="hotel internal view img"/>
                      <img src={image4} alt="hotel internal view img"/>

                    </SubImagesWrapper>
                  </ImagesWrapper>
              </BodyContainer>
          </ContainerFluid>
          <Footer/>
          </MainContainer>
        </>
     );
}
 
export default  Home;