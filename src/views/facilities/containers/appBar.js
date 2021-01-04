import React from 'react';
import {AppBar,Toolbar,IconButton,Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'blue'
  },
  title: {
    flexGrow: 1,
  },
  AppBar:{
    zIndex:1201,
    boxShadow:' 0 1px 6px 0 rgba(32, 33, 36, 0.28)'
  }
}));

const Appbar=()=>{
  const classes = useStyles();
  return(
    <AppBar
      position='fixed'
      className={classes.AppBar}
      color="white"
    >
      <Toolbar>
          <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BFND
          </Typography>
        </Toolbar>

    </AppBar>
  );
}

export default Appbar;