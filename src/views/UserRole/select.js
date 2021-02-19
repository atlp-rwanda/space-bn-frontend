import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 140,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
const SelectRole = (props) => {
    const classes = useStyles();
    const [role, setRole] = React.useState('');
    const handleChange = (event) => {
        setRole(event.target.value);
        props.setAssignRole(event.target.value);
    };
const roleName = (props.currentRole===1)?'SUPER_ADMIN':(props.currentRole===2)?'MANAGER':(props.currentRole===3)?'TRAVEL_ADMIN':(props.currentRole===4)?'TRAVEL_TEAM_MEMBER':'REQUESTER'
  return (
    <div>
     <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{roleName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          onChange={handleChange}
        >
        {props.roles.map((role) => (
          <MenuItem value={role.id}>{role.name}</MenuItem>
        ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectRole;