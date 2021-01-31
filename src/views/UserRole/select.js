import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
const SelectRole = () => {
    const classes = useStyles();
    const [role, setRole] = React.useState('');
    const handleChange = (event) => {
        setRole(event.target.value);
    };
  return (
    <div>
     <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          onChange={handleChange}
        >
          <MenuItem value={1}>Super Admin</MenuItem>
          <MenuItem value={2}>Manager</MenuItem>
          <MenuItem value={3}>Travel Admin</MenuItem>
          <MenuItem value={4}>Travel Team </MenuItem>
          <MenuItem value={5}>Requester</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectRole;