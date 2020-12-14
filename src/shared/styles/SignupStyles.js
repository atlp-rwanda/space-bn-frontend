import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
   
    root: {
      margin: 'auto',
      width: '90%',
      marginTop: 20,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 'regular',
    
      [theme.breakpoints.down('sm')]: {
        width: '90%'
      },
    
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      },
      '@media (max-width:935px)': {
        width: '90%',
        marginTop: 18
      },
      '@media (max-width:650px)': {
        width: '100%',
      },
    },
    mainContainer: {
      width: '100%',
      height: '115vh'
    },
    pos:{
      marginTop: 122,
      width: 500,
      height: 600,
      marginBottom: 10,
      background:'#FFFFFF',
      boxShadow:'0px 4px 20px rgba(0, 0, 0, 0.07)',
      borderRadius: 5,
      margin: 'auto',

      [theme.breakpoints.up('md')]: {
        padding: '10px 20px 30px 57px',
        marginRight: -195,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        padding: '20px 20px 20px 50px',
      },
      '@media (max-width:935px)': {
        width: '90% !important',
        padding: '10px 0px 30px 130px',

      },
      '@media (max-width:850px)': {
        width: 500,
        padding: '10px 0px 30px 100px',
      },
      '@media (max-width:650px)': {
        width: 400,
        padding: '10px 20px 30px 30px',
      },
      '@media (max-width:470px)': {
        width: 250,
        padding: '10px 20px 30px 50px',
      }
    },
    btn:{
      marginTop: 20,
      width: '100%',
      border: '1px solid #127CDD',
      borderRadius: 50,
      height: 50,
    },
    span:{
      alignSelf: 'center',
      width: 300,
      fontFamily: 'Poppins, sans-serif',
      textTransform: 'capitalize',
      color: '#5E5E5E',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.8rem'
      },
    },
    img:{
      width: 30,
      height: 30,
    },
    action:{
      width: '100%',
      margin: 'auto',
      marginTop: 40,
      marginBottom: 40,
      height: 50,
      fontFamily: 'Poppins, sans-serif',
      textTransform: 'capitalize',
      fontWeight: 200,
      fontSize: '1.3rem',
      background: '#2196F3',
    },
    h1:{
      textAlign: 'center',
      color: '#726C6C',
      paddingRight: 60,
      fontFamily: 'Poppins, sans-serif',
    },
    signupContainer:{
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      width: '70%',
      '@media (max-width:935px)': {
       width: '100%'

      },
    },
  }));
  
  