import React from 'react';
import Paper from '@material-ui/core/Paper';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import nextId from "react-id-generator";





const useStyles = makeStyles((theme) => ({
  _addBtn:{
      color:'blue',
      fontSize:'2rem',

    
  },
  _titleSection:{
    display:'flex',
    justifyContent:'space-between',
    padding:'0 0 15px 0',
    '&:hover':{
      cursor:'pointer'
    }
  },
  _tableHaders:{
    fontWeight:'bold'
  },
  _editBtn:{
    background:'#2196F3',
    color:'#fff',
    borderRadius:'50%',
    padding:'3px',
    '&:hover':{
      cursor:'pointer'
    }
  },
  _delBtn:{
    color:'#E10050',
    marginLeft:'5px',
    fontSize:'26px',
    '&:hover':{
      cursor:'pointer'
    }
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
    marginRight:'auto'
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
    marginTop:'40px',
    marginBottom:'15px',
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

const columns = [
  { field: 'id', headerName: 'Facility Id', width: 140 },
  { field: 'Location', headerName: 'Location', width: 190 },
  { field: 'Address', headerName: 'Location Address', width: 230 },
  {
    field: 'image',
    headerName: 'Image',
    width: 190
  },
  {
    field: 'rooms',
    headerName: 'N Rooms',
    width: 190
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 190,
    renderCell: (params) => (
      <strong>
        <EditIcon 
          style={{
            background:'#2196F3',
            color:'#fff',
            borderRadius:'50%',
            padding:'3px',
            '&:hover':{
              cursor:'pointer'
            }
          }}
        />
        <DeleteIcon
          style={{
            color:'#E10050',
            marginLeft:'5px',
            fontSize:'26px',
            '&:hover':{
              cursor:'pointer'
            }
          }}
        />
      </strong>
    ),
  },
  
];

const rows = [
  { id: 1, 
    Location: 'Kigali', 
    Address: "159'st Amohoro Ave", 
    image: 35,
    rooms:12 ,},
  { id: 2, Location: 'Gisenyi', Address: "159'st Amohoro Ave", image: 42,rooms:12 },
  { id: 3, Location: 'Kigali', Address: "159'st Amohoro Ave", image: 45,rooms:12 },
  { id: 4, Location: 'Kigali', Address: "159'st Amohoro Ave", image: 16,rooms:12 },
  { id: 5, Location: 'Austin', Address: "159'st Amohoro Ave", image: 45,rooms:12 },
  { id: 6, Location: 'Austin', Address: "159'st Amohoro Ave", image: 150,rooms:12 },
  { id: 7, Location: 'L.A', Address: "159'st Amohoro Ave", image: 44,rooms:12 },
  { id: 8, Location: 'San diego', Address: "159'st Amohoro Ave", image: 36,rooms:12 },
  { id: 9, Location: 'Huston', Address: "159'st Amohoro Ave", image: 65,rooms:12 },
];



const Facility =()=>{
  const [open, setOpen] = React.useState(false);
  const _facilityClass=['firstclass', 'economy', 'Business']
  const [type,setType] = React.useState('Business');
  const [name, setName] = React.useState("");
  const [address,setAddress] = React.useState("");
  var [_facilityDetails, set_FacilityDetails]=React.useState([])
  


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    let _obj={
      id:nextId(),
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

  return(
    <div>
      <div className={classes._titleSection}>
        <p>Facilities</p>
        <AddCircleIcon onClick={handleOpen} className={classes._addBtn} />
      </div>
      <Paper style={{ height: 450, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={6} checkboxSelection />
      </Paper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes._modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <div className={classes._paper}>
            <Paper style={{width:'500px'}}>
              <div className={classes._modalPaper}>
                <h2 className={classes._modalTitle}>Facilities</h2>
                <form>
                    <TextField
                      id="outlined-helperText"
                      label="Name"
                      placeholder="Serena Hotel"
                      variant="outlined"
                      className={classes._modalInput}
                    />
                    <TextField
                      id="outlined-helperText"
                      label="Location"
                      placeholder="Rubavu"
                      variant="outlined"
                      className={classes._modalInput}
                    />
                    <TextField
                      id="outlined-helperText"
                      label="Address"
                      placeholder="219'st Platin Ave"
                      variant="outlined"
                      className={classes._modalInput}
                    />
                    
                    <OutlinedInput
                      id="outlined-helperText-upload"
                      label="Address"
                      className={classes._modalInput}
                      placeholder="Image"
                      endAdornment={
                        <InputAdornment className={classes._modalInputImage} >
                          <label for="file-input" style={{display: 'flex',
                                                          alignItems: 'center',
                                                          background: '#f6f6f6',
                                                          padding:' 4px 7px 4px 7px',
                                                          borderRadius: '5px',
                                                          cursor: 'pointer',}}>
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
                                <TextField
                                  id="outlined-helperText"
                                  label="name"
                                  placeholder="219'st Platin Ave"
                                  variant="outlined"
                                  className={classes._modalInput}
                                  size="small"
                                  name="name"
                                  value={name}
                                  onChange={e => setName(e.target.value)}
                                /> 
                              </td>
                              <td>
                                <TextField
                                  id="outlined-helperText"
                                  label="Address"
                                  placeholder="219'st Platin Ave"
                                  variant="outlined"
                                  className={classes._modalInput}
                                  size="small"
                                  name="address"
                                  value={address}
                                  onChange={e => setAddress(e.target.value)}
                                /> 
                              </td>
                              <td>
                                <TextField
                                  id="outlined-helperText-class"
                                  select
                                  name="type"
                                  label="Address"
                                  placeholder="First Class"
                                  variant="outlined"
                                  className={classes._modalInput}
                                  size="small"
                                  value={type}
                                  onChange={e => setType(e.target.value)}
                                  
                                >
                                  {_facilityClass.map((item)=>(
                                    <MenuItem
                                    key={item} value={item}
                                    >
                                      {item}
                                    </MenuItem>
                                  ))}
                                  </TextField> 
                              </td>
                              <td className={classes._tableAddBtn}>
                                <AddCircleIcon onClick={onSubmit} type="submit" className={classes._tableAddBtnIcon}/>
                              </td>
                            </tr>
                          
                        </tbody>

                        {/**
                         * details table 
                         */}
                        <tbody>
                          
                          {_facilityDetails.map((item,index)=>{
                            return(
                              <tr key={index}>
                                  <td >
                                    <TextField
                                      id="outlined-helperText"
                                      placeholder="219'st Platin Ave"
                                      variant="outlined"
                                      className={classes._modalTableDetailField}
                                      size="small"
                                      name="name"
                                      value={item.name}
                                      disabled
                                      
                                    /> 
                                  </td>
                                  <td>
                                    <TextField
                                      id="outlined-helperText"
                                      placeholder="219'st Platin Ave"
                                      variant="outlined"
                                      className={classes._modalTableDetailField}
                                      size="small"
                                      name="address"
                                      value={item.address}
                                      disabled
                                      
                                    
                                    /> 
                                  </td>
                                  <td>
                                    <TextField
                                      id="outlined-helperText-class"
                                      name="type"
                                      placeholder="First Class"
                                      variant="outlined"
                                      className={classes._modalTableDetailField}
                                      size="small"
                                      value={item.type}
                                      disabled
                                      
                                    />
                                      
                                  </td>
                                  <td className={classes._tableAddBtn}>
                                    <CancelIcon onClick={removeDetails} className={classes._delDetailIcon} />
                                  </td>
                                </tr>
                            );
                          
                        })}
                        
                        </tbody>
                      </table>
                  

                    <Button
                            variant="contained"
                            color="default"
                            className={classes._submitBtn}
                            
                          >
                            Submit
                    </Button>
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
