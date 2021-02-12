import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    faqContainer:{
      marginTop: 70,
      width: '100vw',
      minHeight: '80vh'
      
    },
    toolbar: {
      margin:'0 150px',
      '@media(max-width: 700px)': {
        margin:0
      }
    },
    searchContainer:{
      background: '#E0E0E0',
      height: '20vh',
      paddingTop: theme.spacing(6)
    },
    questionContainer: {
      padding: theme.spacing(2, 4),
      marginTop: 20,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      '@media(max-width:600px)': {
        width: '95%',
        padding: theme.spacing(0),
        display: 'block'
      }
    },
    leftDivider: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: 20,
      borderLeft: '1px solid #C3C3C3',
      height: 'auto',
    },
    contentContainer: {
      marginTop: '-10px'
    },
    content: {
      paddingLeft: 0,
      margin: '10px 0 30px 0'
    },
    badge: {
      background: "rgba(229, 229, 229, 1)",
      color: "#726C6C",
  },
  links: {
    color: '#127CDD',
    textDecoration: 'none',
    '&:hover':{
      cursor:'pointer',
      textDecoration: 'underline'
    },
    margin: '0 10px'
  },
  title: {
    color: '#5E5E5E',
    margin: '10px'
  },
  body: {
    color: '#5E5E5E',
    textAlign: 'justify',
    width: '95%',
    margin: '0 10px'
  }
}));