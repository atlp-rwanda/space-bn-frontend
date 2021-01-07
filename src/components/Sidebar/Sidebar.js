import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom'
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
import RequestsIcon from '../../assets/icons/RequestsIcon.png';
import FacilitiesIcon from '../../assets/icons/FacilitiesIcon.png';
import './Sidebar.css';
import {userTypes} from '../../helpers/userTypes';
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
  const user = JSON.parse(localStorage.getItem('user'))
 
  const classes = useStyles();
  const [userType,setUserType] = useState('')
  const [currentLocation,setLocation] = useState('');
  const loc = useLocation().pathname;

  useEffect(() => {
    setUserType(user.userType);
    setLocation(loc);
},[loc,user.userType]);




  
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
            {userType === userTypes.admin ? (
                    <>

                    <ListItem data-testid="Dashboard"
                    onClick={() => props.handleOpen()}                  
                    button key='Dashboard' style={(currentLocation === 'dashboard') ? (active) : (null)}>
                    <ListItemIcon><DashboardIcon/></ListItemIcon>
                    <ListItemText data-testid="managerDasboardList">Dashboard</ListItemText>
                    </ListItem>

                    <ListItem button key='Roles' onClick={() => props.handleOpen()}>
                    <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                    <ListItemText>Roles</ListItemText>
                    </ListItem> 

                    <ListItem button key='AddUser' onClick={() => props.handleOpen()}>
                    <ListItemIcon><img src={AddUserIcon} alt="add user icon" /></ListItemIcon>
                    <ListItemText>Add User</ListItemText>
                    </ListItem>
 
                    <ListItem 
                    onClick={() => props.handleOpen()}
                    button key='Facilities'>
                    <ListItemIcon><img src={FacilitiesIcon} alt="facilities icon" /></ListItemIcon>
                    <ListItemText>Facilities</ListItemText>
                    </ListItem>

                    </>
                    ) : (userType === userTypes.manager) 
                    ? (
                      <>
                        <ListItem 
                        onClick={() => props.handleOpen()}
                        button key='Dashboard'  style={(currentLocation === 'dashboard') ? (active) : (null)}>
                        <ListItemIcon><DashboardIcon/></ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                        </ListItem> 
              
                  
                        <ListItem button key='Request' 
                        onClick={() => props.handleOpen()}
                        style={(currentLocation === '/requests/thread' || currentLocation === '/requests') ? (active) : (null)}>
                        <ListItemIcon><img src={RequestsIcon} alt="request icon" /></ListItemIcon>
                        <ListItemText>Requests</ListItemText>
                        </ListItem>
              
                        <ListItem button key='Facilities'
                        onClick={() => props.handleOpen()}
                        >
                        <ListItemIcon><img src={FacilitiesIcon} alt="facilities icon" /></ListItemIcon>
                        <ListItemText>Facilities</ListItemText>
                        </ListItem>
  
  
                      </>
                    ) : (userType === userTypes.requester)
                    ? (
                      <>
                        <ListItem 
                         onClick={() => props.handleOpen()}
                        button key='Dashboard'  style={(currentLocation === 'dashboard') ? (active) : (null)}>
                        <ListItemIcon><DashboardIcon/></ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                        </ListItem> 
                
                        <ListItem 
                        onClick={() => props.handleOpen()}
                        button key='Requests'  style={(currentLocation === '/requests/thread' || currentLocation === '/requests') ? (active) : (null)}>
                        <ListItemIcon><img src={RequestsIcon} alt="request icon" /></ListItemIcon>
                        <ListItemText>Requests</ListItemText>
                        </ListItem>
              
                        <ListItem button key='Facilities' 
                        onClick={() => props.handleOpen()}
                        >
                        <ListItemIcon><img src={FacilitiesIcon} alt="facilities icon" /></ListItemIcon>
                        <ListItemText>Facilities</ListItemText>
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
