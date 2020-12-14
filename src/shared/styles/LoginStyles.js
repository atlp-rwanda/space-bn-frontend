import * as Material from '@material-ui/core'
import Styled from 'styled-components';
import Pattern from '../../shared/styles/Pattern'

export const Heading = Styled.h1`
    color: #726C6C;
    fontFamily: Poppins, sans-serif;
`
export const InputText = Styled(Material.FormControl)({
    marginTop: '15px',
    marginBottom: '15px'
})

export const Patten = Styled(Pattern)({
    width: 420,
     position: 'absolute',
      margin: 'auto',
       right: 205,
         backgroundColor: 'white',
        
})

export const SocialButton = Styled(Material.Button)({
    margin: '10px 0',
      border: '1px solid #127CDD',
      borderRadius: 50,
      paddingLeft: 0,
      height: '50px',

})

export const SocialText = Styled.span`
    align-self: center;
    width: 250px;
    font-family: Poppins, sans-serif;
    text-transform: capitalize;
    color: #5E5E5E;
`


export const styles = Material.makeStyles((theme) => ({
    mainContainer: {
       width: '100%',
       height: '110vh'
    },
    card: {
        width: 500,
        position: 'absolute',
        background:'#FFFFFF',
        boxShadow:'0px 4px 20px rgba(0, 0, 0, 0.07)',
        borderRadius: 5,
        margin: 'auto',
        marginTop: '25px',
        paddingBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            width: '90%'
          },
          [theme.breakpoints.down('xs')]: {
            width: '100%'
          },
          '@media (max-width:935px)': {
            width: '80%',
          },
          '@media (max-width:650px)': {
            width: '100%',
          },
      }, 

      patternMedia: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            right: 0,
            position: 'static'
            },
            [theme.breakpoints.down('xs')]: {
            width: '100%',
            right: 0,
            position: 'static'
            },
            '@media (max-width:935px)': {
            width: '80%',
            right: 0,
            position: 'static'
            },
            '@media (max-width:650px)': {
            width: '100%',
            right: 0,
            position: 'static'
            },
      },

      container: {
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
      },
  
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
      
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: '#2196F3',
      fontFamily: 'Poppins, sans-serif',
      height: '55px'
    },

    googleLogin: {
      

    },
  

    socialIcons: {
        width: 30,
        height: 30,
        
    },
    input: {
      color: "#2EFF22",
      marginTop: '100em !important',
    },
    signupContainer: {
      marginTop: '100px',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      
    },
  }));
  