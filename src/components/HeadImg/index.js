import React from 'react'
import BackImg from "../../assets/images/back2.png";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    marginTop: "-2rem",
    position: "absolute",
    zIndex: "-1",
    '@media (max-width:935px)': {
     display:'none',
      
    },
  },
}));
export default function HeadImg() {
  const classes = useStyles();

    return (
        <div>
            <img
            src={BackImg}
            alt="back imag"
            className={classes.root}
           
          />
        </div>
    )
}
