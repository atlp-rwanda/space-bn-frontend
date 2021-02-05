import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs({setTab}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
 
  };
const handleClick=(e)=>{
  setTab(e.target.innerHTML)
}
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Pending" data-testid="submit" onClick={handleClick} /> 
        <Tab label="Approved"   onClick={(e)=>setTab(e.target.innerHTML)} />
        <Tab label="Rejected"   onClick={(e)=>setTab(e.target.innerHTML)} />
      </Tabs>
    </Paper>
  );
}