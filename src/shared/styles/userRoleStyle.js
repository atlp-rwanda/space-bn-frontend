import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    wrapper:{
        backgroundColor:'#fff!important',
        width:'80%',
        margin:'auto',
        marginTop:'10rem', 
    },
    card:{
        display: 'flex',
        gap:'1rem',
        flexWrap:'wrap'
    }
 }));
 export default useStyles;