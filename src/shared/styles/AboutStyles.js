import * as Material from '@material-ui/core'
import Styled from 'styled-components';

export const Heading = Styled.h1`
    color: #726C6C;
    fontFamily: Poppins, sans-serif;
    text-transform: uppercase;
`

export const Doting = Styled.div`
    display: inline-block;
    font-size: 100px;
    line-height: 0;
    color: #DADADA;
`


export const styles = Material.makeStyles((theme) => ({
    pageContainer: {
      display: 'flex',
        marginTop: '100px', 
        marginLeft: '15px',
        height: '115vh',
        [theme.breakpoints.down('sm')]: {
          height: 'auto'
        },
        [theme.breakpoints.down('xs')]: {
          height: 'auto',
        },
        '@media (max-width:935px)': {
          
          height: 'auto',
        },
        '@media (max-width:650px)': {
          
          height: 'auto',
        },

      },
      
      avatar: {
        width:100,
        height: 100,
        alignItems: 'center',
        borderRadius: '100%',
        '@media(max-width: 450px)': {
          width: 70,
          height: 70
        },
        '@media(max-width: 340px)': {
          width: 50,
          height: 50
        }
      },

      paragraph: {
        color: '#726C6C', padding: '30px 0', fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
          width: '100%'
        },
        '@media (max-width:935px)': {
          width: '90%',
          margin: '18px',
        },
        '@media (max-width:650px)': {
          width: '100%',
          margin: 18,
        },
      },

      righside: {
        display: 'flex',
      },

      cardContant: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
      },
      dotContianer: {
        marginLeft: '320px',
         marginTop: '30px'
      },
      bookButton: {
        background: '#2196F3',
        fontFamily: 'Poppins, sans-serif',
        height: '35px',
        width: '200px',
        marginLeft: '250px',
        marginTop: '50px',
        borderRadius: '20px',
        marginBottom: '50px',

        [theme.breakpoints.down('xs')]: {        
          marginRight: 40,
          marginLeft: '10%',
          fontSize: '0.9rem'
        },
        '@media (max-width:200px)': {      
          fontSize: '0.5rem'  
        },
      },

      hotelContainer: {
        marginTop: '148px',
        position: 'absolute',
        marginLeft: '100px',
        [theme.breakpoints.down('xs')]: {
          margin:0,
          position: 'static',
        },
        '@media (max-width:935px)': {
          margin:0,
          position: 'static',
        },
        '@media (max-width:650px)': {
          margin:0,
          position: 'static',
        },
      },

      patterna: {
        [theme.breakpoints.down('xs')]: {
          display: 'none'
        },
        '@media (max-width:935px)': {
          display: 'none'
        },
        '@media (max-width:650px)': {
          display: 'none'
        },
      },

      hotelImage: {
        width: 400, height: 250,
        [theme.breakpoints.down('xs')]: {
          width: '100%'
        },
        '@media (max-width:935px)': {
          width: '100%'
        },
        '@media (max-width:650px)': {
          width: '100%'
        },
      },
      card: {
        margin: '50px'
      }
  }));
  