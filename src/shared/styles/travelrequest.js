import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'Poppins, sans-serif',
        fontWeight:'bold',
        width:'50%',
        margin:'auto', 
        marginTop:'10rem',
        marginBottom:'20rem',
        '@media (max-width:935px)': {
          width: '90%',
          marginTop:'8rem',
          marginBottom:'0rem',
        },
    },
   
    backImage:{
        width: "100vw", 
        marginTop: "4rem" ,
        position:'absolute',
        zIndex:'-1',
    },
    cardHeader:{
        backgroundColor:'#88A3E8', 
        color:'#ffffff',
        textAlign:'center',
        padding:'1rem 0',
        fontSize:'2rem'
    },
    fontWeight: {
        fontWeight: "700",
      },

    Btn:{
       display:'flex',
       margin:'1rem 0',
       gap:'2rem' ,
       justifyContent:'center',
       '@media (max-width:935px)': {
        marginBottom: 40
      },
      },
      editBtn:{
        backgroundColor:'#2196F3',
        color:'#ffffff',
        "&:hover":{backgroundColor:'#2196f9',}
      },
      submitBtn:{
        backgroundColor:'#EE5A5A',
        color:'#ffffff',
        "&:hover":{backgroundColor:'#Ef5A5A',},
        
      }
 }));

 export default useStyles;
