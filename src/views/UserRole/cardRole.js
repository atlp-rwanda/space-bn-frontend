import React from "react";
import {
  Typography,
  Fab,
  Paper,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      backgroundColor:'#2196F3',
      padding:'0.5rem',
      color:'white',
     width:'20rem'
    },
    fab:{
      marginLeft:'15rem'
    }
  });
const CardRole = (props) => {
    const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography>{props.role}</Typography>
        <Fab size="small" color="primary" className={classes.fab}>
          {props.countNumber}
        </Fab>
      </Paper>
    </div>
  );
};
export default CardRole;