import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
        height: 'auto',
        '@media (max-width:1024px)': {
          width: '100%'
          },
        marginBottom: '10px'
    },
    contactContainer: {
        width: '70%',
        height: '820px',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        '@media (max-width:935px)': {
        width: '100%'
        }
    },
    pos:{
        marginTop: 125,
        width: 600,
        height: 650,
        marginBottom: 10,
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
            padding: '10px 20px 30px 30px',
        }
    },
    h1:{
        textAlign: 'center',
        color: '#726C6C',
        paddingRight: 60,
        fontFamily: 'Poppins, sans-serif',
        '@media (max-width:350px)': {
            fontSize: '20px'
        },
    },
    root: {
        margin: 'auto',
        width: 400,
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
    action:{
        width: '100%',
        margin: 'auto',
        marginTop: 15,
        marginBottom: 30,
        height: 50,
        fontFamily: 'Poppins, sans-serif',
        textTransform: 'capitalize',
        fontWeight: 200,
        fontSize: '1.3rem',
        background: '#2196F3',
    },
    submitBtn: {
      width: 400,
      margin: '15px auto',
      padding: '15px'
    },
    profileBox: {
      width: 400,
      margin: 'auto',
    },
    profile: {
      width: '100%',
      height: 400,
    }
}));
