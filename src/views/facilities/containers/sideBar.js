import React from 'react';
import {Drawer,List,ListItem,ListItemText,ListItemIcon } from '@material-ui/core';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { makeStyles } from '@material-ui/core/styles';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RateReviewIcon from '@material-ui/icons/RateReview';

const useStyles = makeStyles((theme) => ({
  siedeMenuHeader: {
    height:'72px',
  },
  paper:{
      boxShadow: '9px 0px 6px -7px rgba(0,0,0,0.25)',
      minWidth:'210px'
    
  }
 
  
}));

const SideBar=()=>{
  const _list=[
    {
      text:'Dashboard',
      icon:<MoveToInboxIcon />
    },
    {
      text:'Roles',
      icon:<AccountCircleIcon />
    },
    {
      text:'Request',
      icon:<RateReviewIcon />
    },
    {
      text:'Facilities',
      icon:<BeachAccessIcon />
    }
  ];
  const classes = useStyles();
  return(
    <Drawer
        variant="persistent"
        open="true"
        classes={{paper: classes.paper}}
    >
      <div className={classes.siedeMenuHeader}>

      </div>
      <List>
        {_list.map((item, index) => {
          const {text, icon}=item;
          return(
            <ListItem button key={text}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

export default SideBar;