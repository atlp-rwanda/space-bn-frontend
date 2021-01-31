import React from 'react';
import PropTypes from 'prop-types';
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

// import DoneIcon from '@material-ui/icons/Done';
import FilterListIcon from '@material-ui/icons/FilterList';
import { KeyboardArrowLeft, KeyboardArrowRight,} from '@material-ui/icons';
import RejectIcon from '@material-ui/icons/Cancel';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import { useTheme, withStyles } from '@material-ui/core/styles'
import { useStyles, useStyles1 } from '../../shared/styles/TableStyles';
import { id, ids, createData } from '../../helpers/tableData';


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

 
  
export const RequestTable = ({classes, page, setPage,selected,setSelected,rowsPerPage,setRowsPerPage, rows, StyledTableRow}) => {

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
                {/* <DeleteIcon  /> */}
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
                      <TableCell align="center" className={classes.tableHead}>RequestId</TableCell>
                      <TableCell align="center" className={classes.tableHead}>Requester Position</TableCell>
                      <TableCell align="center" className={classes.tableHead}>Date checkId</TableCell>
                      <TableCell align="center" className={classes.tableHead}>Date checkOut</TableCell>
                      <TableCell align="center" className={classes.tableHead}>Accommodation</TableCell>
                      <TableCell align="center" className={classes.tableHead}>Room Type</TableCell>
                      <TableCell align="center" className={classes.tableHead}>Status</TableCell>
                      {/* <TableCell align="center" className={classes.tableHead}>Action</TableCell> */}
                  </TableRow>
              </TableHead>  
              <TableBody>
                {(rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                    ).map((row, index) => {
                      const isItemSelected = isSelected(row.id);
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
                          <TableCell component="th" scope="row" >
                          <div style={{display: 'flex', flexDirection: 'row'}}>
                              <Checkbox checked={isItemSelected}/>
                              <span style={{marginTop: '12px'}} className={classes.cell}>{id}</span>
                          </div>
                          </TableCell>
                          <TableCell align="center" className={classes.cell}>{row.requester}</TableCell>
                          <TableCell align="center" className={classes.cell}>{row.reason}</TableCell>
                          <TableCell align="center" className={classes.cell}>{row.destination}</TableCell>
                          <TableCell align="center" className={classes.cell}>{row.accommodation}</TableCell>
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
 

const RequestWrapper = () => {
  const classes2 = useStyles()
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

const rows = [
  createData(ids[0], 'Software Engineer', '2021-02-01','2021-02-01', 'Mariot Hotel', 'VIP', 'Rejected'),
  createData(ids[0], 'Software Engineer', '2021-02-01','2021-02-01', 'Mariot Hotel', 'VIP', 'Rejected'),
  createData(ids[1], 'Software Engineer', '2021-02-01','2021-02-01', 'Mariot Hotel', 'VIP', 'Rejected'),
  createData(ids[2], 'Software Engineer', '2021-02-01','2021-02-01', 'Mariot Hotel', 'VIP', 'Rejected'),
  createData(ids[3], 'Software Engineer', '2021-02-01','2021-02-01', 'Mariot Hotel', 'VIP', 'Rejected'),
  createData(ids[4], 'Software Engineer', '2021-02-01','2021-02-01', 'Mariot Hotel', 'VIP', 'Rejected'),
  createData(ids[5], 'Software Engineer', '2021-02-01','2021-02-01', 'Mariot Hotel', 'VIP', 'Rejected'),
  createData(ids[6], 'Software Engineer', '2021-02-01','2021-02-01', 'Mariot Hotel', 'VIP', 'Rejected'),
  createData(ids[7], 'Software Engineer', '2021-02-01','2021-02-01', 'Mariot Hotel', 'VIP', 'Rejected'),
]

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  return ( 
    <div className={classes2.root}>
      <div className={classes2.wrapper}>
          <Typography variant="h5" className={classes2.title}>Rejected Requests</Typography>
          
      </div>
      <RequestTable 
      classes={classes} 
      page={page} 
      setPage={setPage} 
      selected={selected} 
      setSelected={setSelected}
      rowsPerPage={rowsPerPage}
      setRowsPerPage={setRowsPerPage}
      rows={rows}
      StyledTableRow={StyledTableRow}
      />
    </div>
   );
}
 
export default RequestWrapper;