import React from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import DropDown from './select'
import Button from '@material-ui/core/Button';
 
function createData(name, names, Email, Role,Action) {
 return { name, names, Email, Role,Action };
}
function descendingComparator(a, b, orderBy) {
 if (b[orderBy] < a[orderBy]) {
   return -1;
 }
 if (b[orderBy] > a[orderBy]) {
   return 1;
 }
 return 0;
}
function getComparator(order, orderBy) {
 return order === 'desc'
   ? (a, b) => descendingComparator(a, b, orderBy)
   : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
 const stabilizedThis = array.map((el, index) => [el, index]);
 stabilizedThis.sort((a, b) => {
   const order = comparator(a[0], b[0]);
   if (order !== 0) return order;
   return a[1] - b[1];
 });
 return stabilizedThis.map((el) => el[0]);
}
const headCells = [
 { id: 'userId', numeric: true, disablePadding: true, label: 'UserId' },
 { id: 'names', numeric: true, disablePadding: false, label: 'names' },
 { id: 'Email', numeric: true, disablePadding: false, label: 'Email' },
 { id: 'Role', numeric: true, disablePadding: false, label: 'Role' },
 { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
];
const useStyles = makeStyles((theme) => ({
 root: {
   width: '100%',
   paddingLeft: theme.spacing(2),
   paddingRight: theme.spacing(1),
 },
 paper: {
   width: '100%',
   marginBottom: theme.spacing(3),
 },
 table: {
   minWidth: 750,
 },
 visuallyHidden: {
   border: 0,
   clip: 'rect(0 0 0 0)',
   height: 1,
   margin: -1,
   overflow: 'hidden',
   padding: 0,
   position: 'absolute',
   top: 20,
   width: 1,
 },
 highlight:
   theme.palette.type === 'light'
     ? {
         color: theme.palette.secondary.main,
         backgroundColor: lighten(theme.palette.secondary.light, 0.85),
       }
     : {
         color: theme.palette.text.primary,
         backgroundColor: theme.palette.secondary.dark,
       },
 title: {
   flex: '1 1 100%',
 },
}));
export default function EnhancedTable() {
 const classes = useStyles();
 const [order, setOrder] = React.useState('asc');
 const [orderBy, setOrderBy] = React.useState('UserId');
 const [page, setPage] = React.useState(0);
 const [rowsPerPage, setRowsPerPage] = React.useState(5);
 const handleRequestSort = (event, property) => {
   const isAsc = orderBy === property && order === 'asc';
   setOrder(isAsc ? 'desc' : 'asc');
   setOrderBy(property);
 };
 const btn=<strong> <Button variant="contained" color="primary">Save</Button> </strong>
 const dropdown = <span><DropDown /></span>
 const rows = [
   createData(123, 'John Doe', "johndoe@bn.rw",dropdown,btn),
   createData(1332, 'Jane Doe', "janedoe12@yahoo.fr",dropdown,btn),
   createData(154, 'Johnny Doe', "johnnydoe@gmail.com", dropdown,btn),
   createData(454, 'Thomas Doe', "thomasdoe@yahoo.com", dropdown,btn),
   createData(849, 'Edinburg Toe', "edinburgtoe1@gmail.com", dropdown,btn),
   createData(129, 'Rulinda', "ruli132@yahoo.com", dropdown,btn),
   createData(893, 'Rulinda', "ruli132@yahoo.com", dropdown,btn),
   createData(542, 'Rulinda', "ruli132@yahoo.com", dropdown,btn),
   createData(453, 'Rulinda', "ruli132@yahoo.com", dropdown,btn),
   createData(454, 'Rulinda', "ruli132@yahoo.com", dropdown,btn),
 ];
 const handleChangePage = (event, newPage) => {
   setPage(newPage);
 };
 const handleChangeRowsPerPage = (event) => {
   setRowsPerPage(parseInt(event.target.value, 10));
   setPage(0);
 };
 const createSortHandler = (property) => (event) => {
   handleRequestSort(event, property);
 };
 const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
 return (
   <div className={classes.root}>
     <Paper className={classes.paper}>
       <TableContainer>
         <Table
           className={classes.table}
           aria-labelledby="tableTitle"
           aria-label="enhanced table"
         >
           <TableHead>
             <TableRow>
                   {headCells.map((headCell) => (
                     <TableCell
                       key={headCell.id}
                       style={{paddingLeft: 20}}
                       align={'left'}
                       padding={headCell.disablePadding ? 'none' : 'default'}
                       sortDirection={orderBy === headCell.id ? order : false}
                     >
                       <TableSortLabel
                         active={orderBy === headCell.id}
                         direction={orderBy === headCell.id ? order : 'asc'}
                         onClick={createSortHandler(headCell.id)}
                         data-testid={headCell.label==='names' ? 'sortDataBtn' : null}
                       >
                         {headCell.label}
                         {orderBy === headCell.id ? (
                           <span className={classes.visuallyHidden}>
                             {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                           </span>
                         ) : null}
                       </TableSortLabel>
                     </TableCell>
                   ))}
             </TableRow>
           </TableHead>
           <TableBody>
             {stableSort(rows, getComparator(order, orderBy))
               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
               .map((row, index) => {
                 const labelId = `enhanced-table-checkbox-${index}`;
                 return (
                   <TableRow
                     hover
                     role="checkbox"
                     tabIndex={-1}
                     key={row.name}
                     data-testid={row.names==='Kigali' ? 'tableRow' : null}
                   >
                     <TableCell style={{paddingLeft: 20}} component="th" id={labelId} scope="row" padding="none">
                       {row.name}
                     </TableCell>
                     <TableCell >{row.names}</TableCell>
                     <TableCell >{row.Email}</TableCell>
                     <TableCell >{row.Role}</TableCell>
                     <TableCell >{row.Action}</TableCell>
                   </TableRow>
                 );
               })}
             {emptyRows > 0 && (
               <TableRow style={ emptyRows }>
                 <TableCell colSpan={6} />
               </TableRow>
             )}
           </TableBody>
         </Table>
       </TableContainer>
       <TablePagination
         rowsPerPageOptions={[5, 10, 25]}
         component="div"
         count={rows.length}
         rowsPerPage={rowsPerPage}
         page={page}
         onChangePage={handleChangePage}
         data-testid='pagination'
         onChangeRowsPerPage={handleChangeRowsPerPage}
       />
     </Paper>
   </div>
 );
};
