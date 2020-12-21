import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'Poppins, sans-serif',
        fontWeight:'bold',
        width:'80%',
        margin:'auto',
        marginBottom:'20rem',
        '@media (max-width:935px)': {
          width: '90%',
          marginBottom:'0rem',
        },
      },
     
      root1:{
        marginTop:'6rem', 
        marginBottom:'2rem',
      },
      paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        marginTop:'3rem',
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
        "&:hover":{opacity:'1'}
      },
      inline:{
          display: 'flex',
          justifyContent:'space-around',
          alignItems:'baseline',
          width:'100%',
          marginTop:'3rem',
          
      },
      bookBtn:{
        borderRadius: 50,
        backgroundColor:'#2196F3',
        "&:hover":{backgroundColor:'#2196f9',}
      },
      Icons: {
       color:'#000000',
       '@media (max-width:935px)': {
       fontSize:'1rem',
       maxWidth:'100%',
      
      },
      },
      formField:{
        
        display: 'flex', 
        gap:'2rem' ,

      },
      amenities:{
        display: 'flex', gap:'0.5rem' ,fontSize:'1rem', fontWeight:'normal',  alignItems:'baseline',
      },
      amenitiesDiv:{
        '@media (max-width:935px)': {
        display: 'block', 
        margin:'auto'
        
        }
      },
      
      
      
 }));

 export default useStyles;
