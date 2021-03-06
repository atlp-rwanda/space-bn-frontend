import React, { useEffect, useState } from "react";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import toaster from "../../helpers/toasts";
import { toast, ToastContainer, Zoom } from "react-toastify";
import Paper from "@material-ui/core/Paper";
import DropDown from "./select";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";

const { REACT_APP_BACKEND_URL } = process.env;

function createData(name, names, Email, Role, Action) {
  return { name, names, Email, Role, Action };
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
  return order === "desc"
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(55),
  },
  table: {
    minWidth: 750,
    minHeight: "400px"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));
export default function EnhancedTable() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("UserId");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const [users, setUsers] = useState([]);

  const headCells = [
    { id: t("userId"), numeric: true, disablePadding: true, label: t("UserId") },
    { id: t("names"), numeric: true, disablePadding: false, label: t("names") },
    { id: t("Email"), numeric: true, disablePadding: false, label: t("Email") },
    { id: t("Role"), numeric: true, disablePadding: false, label: t("Role") },
    { id: t("Action"), numeric: true, disablePadding: false, label: t("Action") },
  ];

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(`${REACT_APP_BACKEND_URL}/user/`);
        const JSONData = await response.json();
        const data = JSONData.user;
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  const[assignRole, setAssignRole] = useState(null);
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    const getRoles = async () => {
      try {
        const response = await fetch(`${REACT_APP_BACKEND_URL}/roles/`);
        const JSONData = await response.json();
        const data = JSONData.roles;
        setRoles(data);
      } catch (error) {
        console.log(error);
      }
    };
    getRoles();
  }, []);
  const updateRole = async (userId, roleId) => {
    try {
        const data = {
          _userId: userId.toString(),
          _roleId: roleId.toString(), 
        };
        await fetch(`${REACT_APP_BACKEND_URL}/roles/assign`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => res.json())
      .then((result) => {
        console.log(result);
        toaster(t('Role assigned successfully'), "success");
      }).catch((err) => {
        console.log(err);
      })
    } catch (error) {
      console.log(error);
    }
  }
  const btn = (userId, roleId) => {
    return (
      <strong>
      {" "}
      <Button variant="contained" onClick={ () => updateRole(userId, roleId)} color="primary">
        {t('Save')}
      </Button>{" "}
    </strong>
    );
  };
  const dropdown = (currentRole) => {
    return(
    <span>
      <DropDown roles={roles} setAssignRole={setAssignRole} currentRole={currentRole} />
    </span>
    );
  };
  const rows = [
    createData(123, "John Doe", "johndoe@bn.rw", dropdown, btn),
    createData(1332, "Jane Doe", "janedoe12@yahoo.fr", dropdown, btn),
    createData(154, "Johnny Doe", "johnnydoe@gmail.com", dropdown, btn),
    createData(454, "Thomas Doe", "thomasdoe@yahoo.com", dropdown, btn),
    createData(849, "Edinburg Toe", "edinburgtoe1@gmail.com", dropdown, btn),
    createData(129, "Rulinda", "ruli132@yahoo.com", dropdown, btn),
    createData(893, "Rulinda", "ruli132@yahoo.com", dropdown, btn),
    createData(542, "Rulinda", "ruli132@yahoo.com", dropdown, btn),
    createData(453, "Rulinda", "ruli132@yahoo.com", dropdown, btn),
    createData(454, "Rulinda", "ruli132@yahoo.com", dropdown, btn),
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
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <ToastContainer
          draggable={true}
          transition={Zoom}
          autoClose={1}
          position={toast.POSITION.TOP_CENTER}
        />
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
                    style={{ paddingLeft: 20 }}
                    align={"left"}
                    padding={headCell.disablePadding ? "none" : "default"}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={createSortHandler(headCell.id)}
                      data-testid={
                        headCell.label === "names" ? "sortDataBtn" : null
                      }
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <span className={classes.visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </span>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(users, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    const names = `${row.firstname} ${row.lastname}`
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.name}
                        data-testid={row.names === "Kigali" ? "tableRow" : null}
                      >
                        <TableCell
                          style={{ paddingLeft: 20 }}
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell>{names}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{dropdown(row.roleId)}</TableCell>
                        <TableCell>{btn(row.id, assignRole)}</TableCell>
                      </TableRow>
                    );
                    })}
              {emptyRows > 0 && (
                <TableRow style={emptyRows}>
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
          data-testid="pagination"
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}