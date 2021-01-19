import React from 'react';
import{Paper,Modal,Fade,Backdrop,TextField,InputAdornment,Button,OutlinedInput,MenuItem} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import Tablez from './table'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CancelIcon from '@material-ui/icons/Cancel';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  _addBtn:{
      color:'#2196F3',
      fontSize:'2rem',
  },
  _titleSection:{
    display:'flex',
    fontSize:'24px',
    justifyContent:'space-between',
    padding:'0 0 15px 15px',
    fontWeight:'600',
    '&:hover':{
      cursor:'pointer'
    }
  },
  _tableHaders:{
    fontWeight:'bold'
  },
  _modalPaper:{
    background:'#fff',
    minHeight:'600px',
    display:'flex',
    flexDirection:'column',
    padding:'0 25px 0 25px'
  },
  _paper:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    outline: 'none'
  },
  _modal:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  _modalTitle:{
    color:'#726C6C',
    padding:'10px 5px 0 5px ',
    marginLeft:'auto',
    marginRight:'auto',
  },
  _modalInput:{
    marginTop:'25px',
    outlineColor:'#2196F3',
    width:'100%'
  },
  _tableAddBtn:{
    width:'30px'
  },
  _tableAddBtnIcon:{
    marginBottom:'-18px',
    color:'#2196F3',
    borderRadius:'50%',
    '&:hover':{
      cursor:'pointer'
    }

  },
  _submitBtn:{
    width:'100%',
    background:'#2196F3',
    color:'#fff',
    margin:'40px 0px 15px 0px',
    padding:'10px 0 10px 0',
    fontWeight:'bold',
    fontSize:'18px',
    '&:hover':{
      background:'#2196F3',
      color:'#fff'
    }
  },
  _modalTableDetailField:{
    marginTop:'2px',
    borderRadius:'20px'
  },
  _delDetailIcon:{
    color:"#E10050",
    marginBottom:'-10px',
    '&:hover':{
      cursor:'pointer'
    }
  },
}));

const Facility =()=>{
  const [open, setOpen] = React.useState(false);
  const _facilityClass=['firstclass', 'economy', 'Business']
  const [type,setType] = React.useState('Business');
  const [name, setName] = React.useState("");
  const [address,setAddress] = React.useState("");
  var [_facilityDetails, set_FacilityDetails]=React.useState([]);
  const { register, handleSubmit } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const Submit = (e) => {
    let _obj={
      name:name,
      address:address,
      type:type
    }
    set_FacilityDetails(_facilityDetails.concat(_obj));
    setName("");
    setAddress("");
    setType("");
  };
  const removeDetails=(index)=>{
    set_FacilityDetails(_facilityDetails.splice(index,1));
    set_FacilityDetails(_facilityDetails.filter(i=>i!==index))
  };
  const onSubmit = data => {
    console.log(data)
  };

  return(
    <div>
      <div className={classes._titleSection}>
        <p>Facilities</p>
        <AddCircleIcon data-testid="openAddModalBtn" onClick={handleOpen} className={classes._addBtn} />
      </div>
      <Tablez />
      <Modal data-testid={open ? 'modalOpn' : null} aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={classes._modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop}>
        <Fade in={open}>
          <div className={classes._paper}>
            <Paper style={{width:'500px'}}>
              <div className={classes._modalPaper}>
                <h2 className={classes._modalTitle}>Facilities</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField id="outlined-helperText-name" label="Name" placeholder="Serena Hotel" variant="outlined" type="text" className={classes._modalInput} name="names" inputRef={register} />
                    <TextField id="outlined-helperText-location" label="Location" placeholder="Rubavu" variant="outlined" className={classes._modalInput} name="location" inputRef={register} />
                    <TextField id="outlined-helperText-address" label="Address" placeholder="219'st Platin Ave" variant="outlined" className={classes._modalInput} name="address" inputRef={register} />

                    <OutlinedInput id="outlined-helperText-upload" label="Address" className={classes._modalInput} placeholder="Image" name="image" inputRef={register} 
                      endAdornment={
                        <InputAdornment className={classes._modalInputImage} >
                          <label for="file-input" style={{display: 'flex',alignItems: 'center',background: '#f6f6f6',padding:' 4px 7px 4px 7px',borderRadius: '5px', cursor: 'pointer',}}>
                          <CloudUploadIcon /> &nbsp; Upload
                          </label>
                          <input id="file-input" type="file" style={{visibility:'hidden',width:'0',height:'0'}}></input>
                        </InputAdornment>
                      }
                    />
                      <table>
                        <tbody>
                            <tr>
                              <td>
                                <TextField inputProps={{"data-testid": "facNames"}} id="outlined-helperText" label="name" placeholder="219'st Platin Ave" variant="outlined" className={classes._modalInput} size="small" name="name" value={name} onChange={e => setName(e.target.value)} /> 
                              </td>
                              <td>
                                <TextField inputProps={{"data-testid": "facAddress"}}  id="outlined-helperText" label="Address" placeholder="219'st Platin Ave" variant="outlined" className={classes._modalInput} size="small" name="address" value={address} onChange={e => setAddress(e.target.value)} /> 
                              </td>
                              <td>
                                <TextField inputProps={{"data-testid": "facType"}} id="outlined-helperText-class" select name="type" label="Type" placeholder="First Class" variant="outlined" className={classes._modalInput} size="small" value={type} onChange={e => setType(e.target.value)} >
                                  {_facilityClass.map((item)=>(
                                    <MenuItem key={item} value={item}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                  </TextField> 
                              </td>
                              <td className={classes._tableAddBtn}>
                                <AddCircleIcon data-testid="addFacDetailsBtn" onClick={Submit} type="submit" className={classes._tableAddBtnIcon}/>
                              </td>
                            </tr>
                        </tbody>
                  
                        <tbody>
                          {_facilityDetails.map((item,index)=>{
                            return(
                              <tr key={index}>
                                  <td >
                                    <TextField id="outlined-helperText" placeholder="219'st Platin Ave" variant="outlined" className={classes._modalTableDetailField} size="small" name="name" value={item.name} disabled /> 
                                  </td>
                                  <td>
                                    <TextField id="outlined-helperText" placeholder="219'st Platin Ave" variant="outlined" className={classes._modalTableDetailField} size="small" name="address" value={item.address} disabled /> 
                                  </td>
                                  <td>
                                    <TextField id="outlined-helperText-class" name="type" placeholder="First Class" variant="outlined" className={classes._modalTableDetailField} size="small" value={item.type} disabled />   
                                  </td>
                                  <td className={classes._tableAddBtn}>
                                    <CancelIcon data-testid="rmvDetailBtn" onClick={removeDetails} className={classes._delDetailIcon} />
                                  </td>
                                </tr>
                            );
                        })}
                        </tbody>
                      </table>
                    <Button data-testid="submitForm" variant="contained" color="default" className={classes._submitBtn} type="submit">Submit</Button>
                </form>
              </div>
            </Paper>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default  Facility;
