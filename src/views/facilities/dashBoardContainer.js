import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Facility from './facility'


const useStyles = makeStyles((theme) => ({
  _wrapper:{
      backgroundColor:'#fff!important',
      padding:'64px 40px 40px 70px',
      height:'100vh' 
  },
  _sideBar:{
    '@media (min-width:780px)': {
      display:'none'
    }
  }
 
  
}));

const DashboardContainer=()=>{
  const classes = useStyles();
  return(
    <div>
      <div className={classes._wrapper}>
        <Facility />
      </div>
    </div>
    
  );
}

export default DashboardContainer;