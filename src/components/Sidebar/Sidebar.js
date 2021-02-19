import React, {useState, useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RolesIcon from '../../assets/icons/Roles-icon.png';
import AddUserIcon from '../../assets/icons/AddUserIcon.png';
import FacilitiesIcon from '../../assets/icons/FacilitiesIcon.png';
import './Sidebar.css';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import HomeTwoTone from '@material-ui/icons/HomeTwoTone';
import CommentIcon from '@material-ui/icons/Comment';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useTranslation } from "react-i18next";

const drawerWidth = '18%';

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper:  {
    width: drawerWidth,
    zIndex: 1,
    marginTop: '3em',
    [theme.breakpoints.down('sm')]: {
      width: '60%',
    },
},
  mobileDrawerPaper: {
    left: '-18%'
  },
  
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const listsContainer = {
  marginTop: '3em'
}
const active = {
  borderLeft: '5px solid #2196F3',
  background: 'rgba(33, 150, 243, 0.08)'
}

export default function PermanentDrawerLeft(props) {
  const userRole = JSON.parse(localStorage.getItem('userRoleId'));
 
  const classes = useStyles();
  const [currentLocation, setLocation] = useState('');
  const loc = useLocation().pathname;
  const { t } = useTranslation();

  useEffect(() => {
    setLocation(loc);
},[loc, userRole]);

const history = useHistory();

return (
    <>
      <CssBaseline />
        {
          props.isOpen ? 
          <Drawer
            className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
              anchor="left" 
          > 
            <List style={listsContainer}>
              {userRole === 1 ? (
                <>
                  <ListItem data-testid="Dashboard"
                    onClick={() => {props.handleOpen(); history.push('/dashboard')}}                  
                    button key='Dashboard' style={(currentLocation === '/dashboard' || currentLocation === '/requests/thread') ? (active) : (null)}
                  >
                    <ListItemIcon><DashboardIcon/></ListItemIcon>
                    <ListItemText data-testid="managerDasboardList">Dashboard</ListItemText>
                  </ListItem>
                  <ListItem button key='Facilities'
                    onClick={() => {props.handleOpen(); history.push('/facilities')}}
                    style={(currentLocation === '/facilities') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={FacilitiesIcon} alt="facilities icon" /></ListItemIcon>
                    <ListItemText>{t('Facilities')}</ListItemText>
                  </ListItem>
                  <ListItem button key='Profile' onClick={() => {props.handleOpen(); history.push('/profile')}}
                    style={(currentLocation === '/profile') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </ListItem> 
                  <ListItem button key='Add Profile Pic' onClick={() => {props.handleOpen(); history.push('/addprofilepicture')}}
                    style={(currentLocation === '/addprofilepicture') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                    <ListItemText>Add Profile Pic</ListItemText>
                  </ListItem> 
                  <ListItem button key='AddUser' onClick={() =>{ props.handleOpen()}}
                    style={(currentLocation === '/addUser') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={AddUserIcon} alt="add user icon" /></ListItemIcon>
                    <ListItemText>Add User</ListItemText>
                  </ListItem>
                  <ListItem button key='Roles' onClick={() => {props.handleOpen()}}
                    style={(currentLocation === '/userrole') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                    <ListItemText>Roles</ListItemText>
                  </ListItem> 
                  <ListItem button key='Hotels' onClick={() => {props.handleOpen(); history.push('/hotels')}}
                    style={(currentLocation === '/hotels') ? (active) : (null)}
                  >
                  <ListItemIcon><HomeTwoTone /></ListItemIcon>
                    <ListItemText>Hotels</ListItemText>
                  </ListItem> 
                  <ListItem button key='Add Hotel' onClick={() => {props.handleOpen(); history.push('/addhotel')}}
                    style={(currentLocation === '/addhotel') ? (active) : (null)}
                    >
                    <ListItemIcon><HomeWorkIcon /></ListItemIcon>
                    <ListItemText>Add Hotel</ListItemText>
                  </ListItem> 
                  <ListItem button key='FAQ' onClick={() => {props.handleOpen(); history.push('/deletefaq')}}
                    style={(currentLocation === '/deletefaq') ? (active) : (null)}
                  >
                    <ListItemIcon><NotListedLocationIcon /></ListItemIcon>
                    <ListItemText>FAQ</ListItemText>
                  </ListItem> 
                </>
              ) : (userRole === 2) 
              ? (
                <>
                  <ListItem button key='Dashboard'
                  onClick={() => {props.handleOpen(); history.push('/dashboard')}}
                  style={(currentLocation === '/dashboard' || currentLocation === '/requests/thread') ? (active) : (null)}
                >
                  <ListItemIcon><DashboardIcon/></ListItemIcon>
                  <ListItemText>Dashboard</ListItemText>
                </ListItem> 
                  <ListItem button key='Facilities'
                    onClick={() => {props.handleOpen(); history.push('/facilities')}}
                    style={(currentLocation === '/facilities') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={FacilitiesIcon} alt="facilities icon" /></ListItemIcon>
                    <ListItemText>Facilities</ListItemText>
                  </ListItem>
                  <ListItem button key='profile' onClick={() => {props.handleOpen(); history.push('/profile')}}
                    style={(currentLocation === '/profile') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </ListItem> 
                  <ListItem button key='Add Profile Pic' onClick={() => {props.handleOpen(); history.push('/addprofilepicture')}}
                    style={(currentLocation === '/addprofilepicture') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                    <ListItemText>Add Profile Pic</ListItemText>
                  </ListItem>
                  <ListItem button key='requests' onClick={() => {props.handleOpen(); history.push('/requests/thread')}}
                    style={(currentLocation === '/profilerequests/thread') ? (active) : (null)}
                  >
                    <ListItemIcon><LiveHelpIcon /></ListItemIcon>
                    <ListItemText>Requests</ListItemText>
                  </ListItem> 
                  <ListItem button key='reqStats' onClick={() => {props.handleOpen(); history.push('/requests/thread')}}
                    style={(currentLocation === '/requests/thread') ? (active) : (null)}
                  >
                    <ListItemIcon><EqualizerIcon /></ListItemIcon>
                    <ListItemText>Req Statistics</ListItemText>
                  </ListItem> 
                  <ListItem button key='comments' onClick={() => {props.handleOpen(); history.push('/comments')}}
                    style={(currentLocation === '/comments') ? (active) : (null)}
                  >
                    <ListItemIcon><CommentIcon /></ListItemIcon>
                    <ListItemText>Comments</ListItemText>
                  </ListItem> 
                </>
              ) : (userRole === 3) 
              ? (
                <>
                  <ListItem button key='Dashboard'
                  onClick={() => {props.handleOpen(); history.push('/dashboard')}}
                  style={(currentLocation === '/dashboard' || currentLocation === '/requests/thread') ? (active) : (null)}
                >
                  <ListItemIcon><DashboardIcon/></ListItemIcon>
                  <ListItemText>Dashboard</ListItemText>
                </ListItem> 
                  <ListItem button key='Facilities'
                    onClick={() => {props.handleOpen(); history.push('/facilities')}}
                    style={(currentLocation === '/facilities') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={FacilitiesIcon} alt="facilities icon" /></ListItemIcon>
                    <ListItemText>Facilities</ListItemText>
                  </ListItem>
                  <ListItem button key='profile' onClick={() => {props.handleOpen(); history.push('/profile')}}
                    style={(currentLocation === '/profile') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </ListItem> 
                  <ListItem button key='Add Profile Pic' onClick={() => {props.handleOpen(); history.push('/addprofilepicture')}}
                    style={(currentLocation === '/addprofilepicture') ? (active) : (null)}
                  >
                    <ListItemIcon><PersonAddIcon /></ListItemIcon>
                    <ListItemText>Add Profile Pic</ListItemText>
                  </ListItem>
                  <ListItem button key='addfacility' onClick={() => {props.handleOpen(); history.push('/addfacility')}}
                    style={(currentLocation === '/addfacility') ? (active) : (null)}
                  >
                    <ListItemIcon><HomeTwoTone/></ListItemIcon>
                    <ListItemText>Add Facility</ListItemText>
                  </ListItem> 
                  <ListItem button key='requests' onClick={() => {props.handleOpen(); history.push('/requests/thread')}}
                    style={(currentLocation === '/profilerequests/thread') ? (active) : (null)}
                  >
                    <ListItemIcon><LiveHelpIcon /></ListItemIcon>
                    <ListItemText>Requests</ListItemText>
                  </ListItem> 
                  <ListItem button key='reqStats' onClick={() => {props.handleOpen(); history.push('/requests/thread')}}
                    style={(currentLocation === '/requests/thread') ? (active) : (null)}
                  >
                    <ListItemIcon><EqualizerIcon /></ListItemIcon>
                    <ListItemText>Req Statistics</ListItemText>
                  </ListItem> 
                  <ListItem button key='comments' onClick={() => {props.handleOpen(); history.push('/comments')}}
                    style={(currentLocation === '/comments') ? (active) : (null)}
                  >
                    <ListItemIcon><CommentIcon /></ListItemIcon>
                    <ListItemText>Comments</ListItemText>
                  </ListItem> 
                </>
              ) : (userRole === 4) 
              ? (
                <>
                  <ListItem button key='Dashboard'
                  onClick={() => {props.handleOpen(); history.push('/dashboard')}}
                  style={(currentLocation === '/dashboard' || currentLocation === '/requests/thread') ? (active) : (null)}
                >
                  <ListItemIcon><DashboardIcon/></ListItemIcon>
                  <ListItemText>Dashboard</ListItemText>
                </ListItem> 
                  <ListItem button key='Facilities'
                    onClick={() => {props.handleOpen(); history.push('/facilities')}}
                    style={(currentLocation === '/facilities') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={FacilitiesIcon} alt="facilities icon" /></ListItemIcon>
                    <ListItemText>Facilities</ListItemText>
                  </ListItem>
                  <ListItem button key='profile' onClick={() => {props.handleOpen(); history.push('/profile')}}
                    style={(currentLocation === '/profile') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </ListItem> 
                  <ListItem button key='Add Profile Pic' onClick={() => {props.handleOpen(); history.push('/addprofilepicture')}}
                    style={(currentLocation === '/addprofilepicture') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                    <ListItemText>Add Profile Pic</ListItemText>
                  </ListItem>
                  <ListItem button key='requests' onClick={() => {props.handleOpen(); history.push('/requests/thread')}}
                    style={(currentLocation === '/profilerequests/thread') ? (active) : (null)}
                  >
                    <ListItemIcon><LiveHelpIcon /></ListItemIcon>
                    <ListItemText>Requests</ListItemText>
                  </ListItem> 
                  <ListItem button key='reqStats' onClick={() => {props.handleOpen(); history.push('/requests/thread')}}
                    style={(currentLocation === '/requests/thread') ? (active) : (null)}
                  >
                    <ListItemIcon><EqualizerIcon /></ListItemIcon>
                    <ListItemText>Req Statistics</ListItemText>
                  </ListItem> 
                  <ListItem button key='comments' onClick={() => {props.handleOpen(); history.push('/comments')}}
                    style={(currentLocation === '/comments') ? (active) : (null)}
                  >
                    <ListItemIcon><CommentIcon /></ListItemIcon>
                    <ListItemText>Comments</ListItemText>
                  </ListItem> 
                </>
              ) : (userRole === 5)
              ? (
                <>
                  <ListItem button key='Dashboard'
                    onClick={() =>{props.handleOpen(); history.push('/dashboard')}}
                    style={(currentLocation === '/dashboard' || currentLocation === '/requests/thread') ? (active) : (null)}
                  >
                    <ListItemIcon><DashboardIcon/></ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                  </ListItem> 
                  <ListItem button key='Facilities' 
                    onClick={() =>{ props.handleOpen(); history.push('/facilities')}}
                    style={(currentLocation === '/facilities') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={FacilitiesIcon} alt="facilities icon" /></ListItemIcon>
                    <ListItemText>Facilities</ListItemText>
                  </ListItem>
                  <ListItem button key='profile' onClick={() => {props.handleOpen(); history.push('/profile')}}
                    style={(currentLocation === '/profile') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </ListItem> 
                  <ListItem button key='Add Profile Pic' onClick={() => {props.handleOpen(); history.push('/addprofilepicture')}}
                    style={(currentLocation === '/addprofilepicture') ? (active) : (null)}
                  >
                    <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                    <ListItemText>Add Profile Pic</ListItemText>
                  </ListItem>
                  <ListItem button key='reqStats' onClick={() => {props.handleOpen(); history.push('/requests/thread')}}
                    style={(currentLocation === '/requests/thread') ? (active) : (null)}
                  >
                    <ListItemIcon><EqualizerIcon /></ListItemIcon>
                    <ListItemText>Req Statistics</ListItemText>
                  </ListItem>
                  <ListItem button key='comments' onClick={() => {props.handleOpen(); history.push('/comments')}}
                    style={(currentLocation === '/comments') ? (active) : (null)}
                  >
                    <ListItemIcon><CommentIcon /></ListItemIcon>
                    <ListItemText>Comments</ListItemText>
                  </ListItem> 
                </>
              ) : (null)
              }
            </List>
          </Drawer>
          : 
          (null)
        }
    </>
  );
}
