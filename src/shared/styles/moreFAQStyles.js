import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    faqContainer:{
      marginTop: 70,
      width: '100%',
      minHeight: '73vh',
      '@media (max-width:1024px)': {
        minHeight: '76vh',
      },
    },
    paper: {
      width: '70%',
      minHeight: '50vh',
      margin: '170px auto',
      paddingBottom: '20px'
    },
    title: {
      color: '#5E5E5E',
      margin: '30px auto',
      paddingTop: '40px',
      textAlign: 'center',
      fontSize: '25px'
    },
    body: {
      textAlign: 'justify',
      margin: '20px auto',
      color: '#5E5E5E',
      width: '90%',
    },
    infos: {
      marginBottom: '20px',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '15px',
      color: '#127CDD'
  },
  related: {
    color: '#5E5E5E',
    margin: '20px auto',
    paddingTop: '20px',
    fontSize: '20px',
    width: '90%',
  },
  links: {
    fontFamily: 'Poppins, sans-serif',
    textDecoration: 'none',
    fontSize: '15px',
    color: '#127CDD',
    '&:hover':{
      cursor:'pointer',
      textDecoration: 'underline'
    }
  }
}));
