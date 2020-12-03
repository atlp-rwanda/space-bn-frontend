import Styled from 'styled-components';
import waveImage from '../../assets/images/wave6.svg';

export const Heading =Styled.h1`
   color: red;
   text-align: center;
   margin-top: 200px;
`

export const ContainerFluid  = Styled.div`
width: 100%;
 min-height: 100vh;
 background-image: url(${waveImage});
 background-repeat: no-repeat;
 @media only screen and (max-width: 600px){
   width: 90%;
 }
 @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2){
    width: 100%;
    
  }
`

export const Header = Styled.header`
  background: white;
  min-height: 50px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.130), 0 3px 6px rgba(0,0,0,0.0);
  @media only screen and (max-width: 600px){
    display: none;
  }
  @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2){
   display: none;
    
  }
`
export const BodyContainer = Styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
 @media only screen and (max-width: 600px){
   width: 90%;
   display: flex;
   flex-direction: column;
 }
 @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2){
    width: 90%;
    display: flex;
   flex-direction: column;
  }
`

export const HighrightWrapper = Styled.div `
  width: 50%;
  padding: 50px;

  h1{
    font-size: 4em;
    font-weight: lighter;
    width: 100%;
    /* font-family: 'Poppins, sans-serif' !importatn; */
   
  }
  @media only screen and (max-width: 600px){
   padding: 0px; 
   width: 100%;
   h1{
     width: 100px;
   }
  }
   @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2){
    width: 100%;
    margin-left: 5%;
  }
 

`

export const HeadingWrapper = Styled.section `
  margin-top: 6em;
  width: 100%;
  h1:nth-child(2){
     margin-top: 0.3em;
  }
  ul{
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
  ul li{
    list-style-type:none;
    font-weight: lighter;

    /* font-family:'Poppins, sans-serif'; */
  }
  @media only screen and (max-width: 600px){
    h1{
      font-size: 2em;
      width: 100%;
    }
    ul{
      width: 90%;
    }
  }
`

export const ButtonsWrapper = Styled.section `
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-top: 3em;
  text-transform: lowercase !important;
  @media only screen and (max-width: 600px){
    width: 100%;
    display:flex;
    flex-direction: column;
    Button{
      margin-top: 1em;
      width: 100%;
    }

  }
`
export const ImagesWrapper = Styled.div`
width: 50%;
min-height: 300px;
@media only screen and (max-width: 600px){
  width: 100%;
  padding: 0px;
}
 @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2){
    width: 100%;
    margin-left: 5%;
    
  }
`

export const SubImagesWrapper = Styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 5em;
   img{
     width: 300px;
     height: 200px;
     padding-top: 0.5em;
   }
   @media only screen and (max-width: 600px){
    grid-template-columns: auto;
    width: 100%;
    img{
      width: 100%;
    }
   }
   @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2){
    margin-left: 5%;

    img{
      width: 95%;
      height: 300px;
    }
  }
`