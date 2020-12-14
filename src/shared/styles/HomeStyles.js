import Styled from 'styled-components';
import waveImage from '../../assets/images/wave6.svg';

export const Heading =Styled.h1`
 
   text-align: center;
   margin-top: 200px;
`
export const MainContainer = Styled.div `
 width: 100%;
 height: 100vh;
`
export const ContainerFluid  = Styled.div`
width: 100%;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 background-image: url(${waveImage});
 background-repeat: no-repeat;
 @media only screen and (max-width: 664px){
   margin-left: 5%;
   width: 90%;
   height: auto;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top:30%;
  }
 @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2){
    width: 100%;
    
  }
  @media screen and (orientation: landscape)
   and  (max-width: 1281px){
    margin-left: 5%;
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:10%;
   }
`

export const Header = Styled.header`
  background: white;
  min-height: 50px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.130), 0 3px 6px rgba(0,0,0,0.0);
  @media only screen and (max-width: 664px){
    display: none;
  }
  
  @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2){
   display: none;
    
  }
  @media screen and (orientation: landscape)
   and  (max-width: 1281px){
     display:none;
   }
`
export const BodyContainer = Styled.div`
 width: 100%;
 display: flex;
 flex-direction: row;
 @media only screen and (max-width: 664px){
         
   width: 100%;
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
  @media screen and (orientation: landscape)
   and  (max-width: 1281px){
    width: 90%;
    display: flex;
    flex-direction: column;
   }
`

export const HighrightWrapper = Styled.div `
  width: 50%;
  padding: 50px;
  
  @media only screen and (max-width: 664px){
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
  @media screen and (orientation: landscape)
   and  (max-width: 1281px){
    width: 100%;
    margin-left: 5%;
   }

`

export const HeadingWrapper = Styled.section `
  width: 100%;
  h1{
      font-size: 3.5em;
      font-weight: lighter;
      width: 100%;
     span{
       display: block;
     }
  }
  h1:nth-child(1){
    height: 80px;
  }
  
  ul{
    margin-top: 1em;
    width: 70%;
    display: flex;
    justify-content: space-between;
    font-size: 1.5em;
  }
  ul li{
    list-style-type:none;
    font-weight: lighter;

  }
  @media only screen and (max-width: 664px){
    h1:nth-child(1){
    height: 50px;
  }
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
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-top: 3em;
  text-transform: lowercase !important;
  Button{
    background: #2196F3;
    width: 190px;
    text-transform: capitalize;
    font-weight: lighter;
  }
  @media only screen and (max-width: 664px){
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
@media only screen and (max-width: 664px){
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
  @media screen and (orientation: landscape)
   and  (max-width: 1281px){
    width: 100%;
    margin-left: 5%;
   }
`

export const SubImagesWrapper = Styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: auto auto;
  height: 100%;
   img{
    
     width: 98%;
     height: 200px;
     padding-top: 0.5em;
   }
   @media only screen and (max-width: 664px){
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
  @media screen and (orientation: landscape)
   and  (max-width: 1281px){
    margin-left: 5%;

    img{
      width: 95%;
      height: 300px;
    }
   }
`