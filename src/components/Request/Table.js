import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import 
    {   Table, 
        TableBody, 
        TableCell, 
        TableRow, 
        TableContainer, 
        TableHead, 
        Paper,
        TableFooter,
        IconButton,
        TablePagination,
        Fab,
        Typography,
        Tooltip,
        Checkbox
    } 
from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Brightness3Sharp, KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon_appr from '@material-ui/icons/Done';
import Icon_rej from '@material-ui/icons/Cancel';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import { useTheme, withStyles } from '@material-ui/core/styles'
import { useStyles, useStyles1 } from '../../shared/styles/TableStyles';
import { id, ids, createData } from '../../helpers/tableData';
import SideForwardIcon from '../../assets/icons/slideForwardIcon.png'

//pagination actions
export const TablePaginationActions = (props) => {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  //CHILD COMPONENT FOR REQUESTWRAPER FUNCTION
export const RequestTable = ({classes, page, setPage,selected,setSelected,rowsPerPage,setRowsPerPage, rows, StyledTableRow, RequestId,RequesterId,DateIn, DateOut,idRoom, Status, Action}) => {
    
  // handle row selection on click event
    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
      setSelected(newSelected);
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }
    const isSelected = (name) => selected.indexOf(name) !== -1;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return ( 
      <Paper style={{display: 'flex', flexDirection: 'column'}}>
        {selected.length > 1 ? 
        (<Tooltip title="Delete selection "  placement="left" className={classes.tooltip}>
            <IconButton color="secondary" aria-label="delete"  className={classes.filter}>
                <DeleteIcon  />
            </IconButton>
        </Tooltip>)  : 
        (<Tooltip title="Filter list"  placement="left" className={classes.tooltip}>
          <IconButton aria-label="filter list" className={classes.filter}>
            <FilterListIcon  />
          </IconButton>
        </Tooltip> )
        }
        <TableContainer  component={Paper}>
            <Table className={classes.table} size="medium" arial-lable="dense table">
              <TableHead>
                  <TableRow>
                      <TableCell align="center" className={classes.tableHead}>{RequestId}</TableCell>
                      <TableCell align="center" className={classes.tableHead}>{RequesterId}</TableCell>
                      <TableCell align="center" className={classes.tableHead}>{DateIn}</TableCell>
                      <TableCell align="center" className={classes.tableHead}>{DateOut}</TableCell>
                      <TableCell align="center" className={classes.tableHead}>{idRoom}</TableCell>
                      <TableCell align="center" className={classes.tableHead}>{Status}</TableCell>
                      <TableCell align="center" className={classes.tableHead}>{Action}</TableCell>
                  </TableRow>
              </TableHead>  
              <TableBody>
               
                {(rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                    ).map((row, index) => {
                      const isItemSelected = isSelected(row.id);

                      //request approving states management for integration
              const [request, setRequest] = useState([])
              useEffect(()=>{
                const getRequests = async ()=>{
                  try{
                    const response = await fetch("http://localhost:5000/Request");
                    const JSONDATA = await response.json();
                    // console.log(JSONDATA.accommodation_requests);
                
                    const data = JSONDATA.accommodation_requests;
                    setRequest(data);
                  }
                  catch (error){
                    console.log(error.message)
                  }
                }
                getRequests();
              }, []);
                      return (
                        <StyledTableRow 
                        key={index}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        onClick={(event) => handleClick(event, row.id)} 
                        selected={isItemSelected}
                        data-testid="table row"
                        >
                           {request.map((data, key)=>console.log(data))}
                          <TableCell component="th" scope="row" >
                          <div style={{display: 'flex', flexDirection: 'row'}}>
                              <Checkbox checked={isItemSelected}/>
                              <span style={{marginTop: '12px'}} className={classes.cell}>{id}</span>
                          </div>
                          </TableCell>
                          <TableCell align="center" className={classes.cell}>{row.RequesterId}</TableCell>
                          <TableCell align="center" className={classes.cell}>{row.DateIn}</TableCell>
                          <TableCell align="center" className={classes.cell}>{row.DateOut}</TableCell>
                          <TableCell align="center" className={classes.cell}>{row.idRoom}</TableCell>
                          <TableCell align="center" className={classes.cell}>{row.status}</TableCell>
                          <TableCell align="center" className={classes.cell}>{row.action}</TableCell>
                        </StyledTableRow>
                    )}) 
                }
                {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                    </TableRow>
                )}
               </TableBody>
               <TableFooter>
                   <TableRow>
                    <TablePagination 
                        rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            inputProps: { 'aria-label': 'rows per page'},
                            native: true,
                        }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    />
                   </TableRow>
               </TableFooter>
            </Table>
        </TableContainer>
        </Paper>
     );
}

//EXPORTED FUNCTION
const RequestWrapper = ({isOnApproving=false, tab}) => {
  const RequestId="RequestId";
  const RequesterId="User Id";
  const DateIn="Date In";
  const DateOut="Date Out"
  const idRoom="Room Id";
  const Status="Status";
  const Action="Action";

  const user = JSON.parse(localStorage.getItem('user'));
  const [userType,setUserType] = useState('');
  const history = useHistory();
  const classes2 = useStyles()
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


// //request approving states management for integration
// const [request, setRequest] = useState([])
// const [idRequest, setIdRequest] = useState('');
// const [idUser, setIdUser] = useState('');
// const [roomId, setRoomId] = useState('');
// const [dateStart, setDateStart] = useState('');
// const [dateEnd, setDateEnd] = useState('');
// const [requestStatus, setRequestStatus] = useState('');

// // const data = []
// const getRequests = async ()=>{
// try{
//   const response = await fetch("http://localhost:5000/Request");
//   const JSONDATA = await response.json();
//   console.log(JSONDATA.accommodation_requests);
  
//   const data = JSONDATA.accommodation_requests;
//   setRequest(data);

//   setIdRequest(JSONDATA.accommodation_requests.id);
//   setIdUser(JSONDATA.accommodation_requests.idUser);
//   setRoomId(JSONDATA.accommodation_requests.idRoom);
//   setDateStart(JSONDATA.accommodation_requests.dateStart);
//   setDateEnd(JSONDATA.accommodation_requests.dateEnd);
//   setRequestStatus(JSONDATA.accommodation_requests.requestStatus);

// }
// catch (error){
//   console.log(error.message)
// }
// }
// getRequests();
  const [button, setButton] = useState( 
  <div style={{display: 'flex', flexDirection: 'row'}}>
                <Fab  color="primary" aria-label="edit" style={{width: 35,height: 30, marginRight: 10,}} disabled={selected.length > 1}><EditIcon style={{width: 20, height: 20,}}/></Fab>
                <IconButton   color="secondary" aria-label="delete" style={{width: 35,height: 35,}} disabled={selected.length > 1}><DeleteIcon style={{width: 25, height: 25,}}/></IconButton>                 
                <img src={SideForwardIcon} alt="slidebackIcon" onClick={() => history.push('/requests/thread')} style={{width: 35, height: 35, cursor: 'pointer', marginLeft:'7%'}} />
  </div>
 )

const status = tab==="Approved"?"Approved":tab==="Rejected"?"Rejected":"Pending";
const rows = [
  // createData(idRequest,idUser,roomId,dateStart,dateEnd, status,button),
  // createData(ids[1], 1, '2020-01-10','2020-01-10',3, status,button),
  // createData(ids[2], 1, '2020-01-10','2020-01-10',3, status,button),
  // createData(ids[3], 1, '2020-01-10','2020-01-10',3, status,button),
  // createData(ids[4], 1, '2020-01-10','2020-01-10',3, status,button),
  // createData(ids[5], 1, '2020-01-10','2020-01-10',3, status,button),
  // createData(ids[6], 1, '2020-01-10','2020-01-10',3, status,button),
  // createData(ids[7], 1, '2020-01-10','2020-01-10',3, status,button),
]
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
   
  useEffect(() => {
    setUserType(user.userType);
   
    // getRequests();

    if(userType == "MANAGER" && isOnApproving && tab){
      setButton(
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <Fab  color="primary" aria-label="approve" style={{width: 35,height: 23, marginRight: 10,}} disabled={selected.length > 1}><Icon_appr style={{width: 23, height: 23,}}/></Fab>
        <IconButton   color="secondary" aria-label="reject" style={{width: 35,height: 35,}} disabled={selected.length > 1}><Icon_rej style={{width: 40, height: 40,}}/></IconButton>
        </div>
      )
    }
    if(userType == "MANAGER" && isOnApproving && tab==="Approved"){
      setButton(null)
    }
    if (userType == "MANAGER" && isOnApproving && tab==="Rejected"){
      setButton(null)
    }
}, [userType, tab]);
  return ( 
    <div className={classes2.root}>
      <div className={classes2.wrapper}>
          <Typography variant="h5" className={classes2.title}>Requests</Typography>
          {
            (isOnApproving) ?
             (null)
             :
            (
              <Fab color="primary" aria-label="add" className={classes2.addBtn}>
               <AddIcon />
              </Fab>
            )
          }
      </div>
      <RequestTable 
      // {request.map()}
      classes={classes} 
      page={page} 
      setPage={setPage} 
      selected={selected} 
      setSelected={setSelected}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
      rows={rows}
      StyledTableRow={StyledTableRow}
      
      RequestId={RequestId}
      RequesterId={RequesterId}
      DateIn={DateIn}
      DateOut={DateOut}
      idRoom={idRoom} 
      Status={Status}
      Action={(tab==="Approved"||tab==="Rejected")?"":Action}
      />
    </div>
   );
}
export default RequestWrapper;