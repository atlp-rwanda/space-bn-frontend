import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    wrapper:{
        backgroundColor:'#fff!important',
        width:'80%',
        margin:'auto',
        marginTop:'6rem',
        marginBottom:'2rem', 
    },
    card:{
        display: 'flex',
        gap:'1rem',
        flexWrap:'wrap'
    },
    titleSection: {
        display:'flex',
        fontSize:'24px',
        marginBottom:'1rem',
        justifyContent:'center',
        fontWeight:'600',
        '&:hover':{
          cursor:'pointer'
        }
    }
 }));
 export default useStyles;