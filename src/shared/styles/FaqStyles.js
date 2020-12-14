import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    faqContainer:{
      marginTop: 70,
      width: '100vw',
      
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
      padding: theme.spacing(2, 6),
      marginTop: 30,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      '@media(max-width:370px)': {
        padding: theme.spacing(0),
      }
    },
    leftDivider: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: 20,
      marginLeft: '30px',
      borderLeft: '1px solid #C3C3C3',
      height: 'auto',
    },
    contentContainer: {
      marginTop: '-5px'
    },
    content: {
      paddingLeft: 20
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
    }
  },
  title: {
    color: '#5E5E5E'
  },
  body: {
    color: '#5E5E5E'
  }
}));