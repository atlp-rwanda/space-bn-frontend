import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'Poppins, sans-serif',
        fontWeight:'bold',
        width:'60%',
        marginTop:'1rem', 
        marginBottom:'1rem', 
        margin:'auto',
        '@media (max-width:935px)': {
          width: '100vw',
          
        },
        
      },
      root1:{
        marginTop:'6rem', 
        marginBottom:'2rem',
        marginLeft:'22rem',
        marginRight:'25rem',
        position:'relative',
        top:0,
        '@media (max-width:935px)': {
          width: '100vw',
          marginLeft:'0',
          marginRight:'0',
         
        },
      },
      paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      image: {
        width: 300,
        height: 'auto',
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      imge: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        cursor:'pointer',
        opacity:'0.6',
        "&:hover":{opacity:'1'},
        '@media (max-width:935px)': {
          display:'none',
          
        },
      },
      
      inline:{
          display: 'flex',
          justifyContent:'space-between',
          alignItems:'baseline',
          marginTop:'1.2rem',
          width:'100%',
         
      },
      bookBtn:{
        borderRadius: 50,
        backgroundColor:'#2196F3',
        "&:hover":{backgroundColor:'#2196f9',}
      },
      Icons: {
       color:'#000000',
       
      },
      formField:{
        display: 'flex', 
        gap:'2rem' ,
        '@media (max-width:450px)': {
          flexDirection: 'column',
        },
        '@media (max-width:935px)': {
          
          display: 'flex',
          // flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignContent: 'flex-start',
          gap:'1rem' ,
        },
      },
      reservationBtn:{
        backgroundColor:'#2196F3', 
        color:'white', 
        margin:'auto'
      },
      fontWeight: {
        fontWeight: "700",
      },
      closeBtn:{
        color: "#969494", cursor: "pointer" 
      }
 }));

 export default useStyles;
