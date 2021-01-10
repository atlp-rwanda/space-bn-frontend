import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Poppins, sans-serif",
    marginTop: 100,
    marginBottom:'4rem',
    margin: "auto",
    width:'60%',
    position:'relative',
    top:'3rem',
    '@media (max-width:935px)': {
      width: '90%',
      marginTop: 28
    },
  },

  paper: {
    padding: theme.spacing(3),
    margin: "auto",
    maxWidth: "100%",
  },
  image: {
    width: 300,
    height: 'auto',
    '@media (max-width:935px)': {
      width: '100%',
     
    },
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  starIcon: {
    width: 14,
    height: 14,
  },
  amenetiesIcon: {
    width:'1rem',
    height:'1rem',
  },
  amenetiesText: {
    color: "rgba(0, 0, 0, 0.7)",
  },
  search: {
    margin: "0 auto",
    maxWidth: 600,
    marginBottom: 20,
    '@media (max-width:935px)': {
      width: '80%',
      marginTop: 28
    },
  },
  headImg: {
    position:'absolute',
    zIndex:'-1',
    width:'100vw',
    top:'3rem',
  },

 
}));
