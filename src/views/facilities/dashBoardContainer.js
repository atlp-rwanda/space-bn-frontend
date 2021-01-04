import React from 'react';
import SideBar from './containers/sideBar';
import Appbar from './containers/appBar'
import { makeStyles } from '@material-ui/core/styles';
import Facility from './facility'


const useStyles = makeStyles((theme) => ({
  _wrapper:{
      marginLeft:'210px',
      marginTop:'64px',
      backgroundColor:'#fff!important',
      padding:'40px',
      height:'100vh'
    
  }
 
  
}));

const DashboardContainer=()=>{
  const classes = useStyles();
  return(
    <div>
      <Appbar/>
      <div className={classes._wrapper}>
        <Facility />
      </div>
      <SideBar />
    </div>
    
  );
}

export default DashboardContainer;