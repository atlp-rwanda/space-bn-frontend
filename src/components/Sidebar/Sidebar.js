import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RolesIcon from '../../assets/icons/Roles-icon.png';
import AddUserIcon from '../../assets/icons/AddUserIcon.png';
import RequestsIcon from '../../assets/icons/RequestsIcon.png';
import FacilitiesIcon from '../../assets/icons/FacilitiesIcon.png';
import './Sidebar.css';
import {userTypes} from '../../helpers/userTypes';
const drawerWidth = '18%';

const userType = 'REQUESTER';
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
    marginTop: '5em',
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

const triggerSideBarMenu = () => {
  document.getElementById("drowerPaper").classList.toggle('show');
}



export default function PermanentDrawerLeft(props) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  const [open, setOpen] = React.useState(true);

  const triggerSidebar  = () => {
    setOpen(!open);
  }
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
          
         
           <List>
            {userType == userTypes.admin ? (
                    <>
                    <ListItem button key='Dashboard'>
                    <ListItemIcon><DashboardIcon/></ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                    </ListItem>

                    <ListItem button key='Dashboard'>
                    <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                    <ListItemText>Roles</ListItemText>
                    </ListItem> 

                    <ListItem button key='Dashboard'>
                    <ListItemIcon><img src={AddUserIcon} alt="add user icon" /></ListItemIcon>
                    <ListItemText>Add User</ListItemText>
                    </ListItem>
 
                    <ListItem button key='Dashboard'>
                    <ListItemIcon><img src={FacilitiesIcon} alt="facilities icon" /></ListItemIcon>
                    <ListItemText>Facilities</ListItemText>
                    </ListItem>

                    </>
                    ) : (userType == userTypes.manager) 
                    ? (
                      <>
                        <ListItem button key='Dashboard'>
                        <ListItemIcon><DashboardIcon/></ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                        </ListItem> 
              
                        <ListItem button key='Roles'>
                        <ListItemIcon><img src={RolesIcon} alt="roles icon" /></ListItemIcon>
                        <ListItemText>Roles</ListItemText>
                        </ListItem>
              
                        
                        <ListItem button key='Dashboard'>
                        <ListItemIcon><img src={RequestsIcon} alt="request icon" /></ListItemIcon>
                        <ListItemText>Requests</ListItemText>
                        </ListItem>
              
                        <ListItem button key='Dashboard'>
                        <ListItemIcon><img src={FacilitiesIcon} alt="facilities icon" /></ListItemIcon>
                        <ListItemText>Facilities</ListItemText>
                        </ListItem>
  
  
                      </>
                    ) : (userType == userTypes.requester)
                    ? (
                      <>
                        <ListItem button key='Dashboard'>
                        <ListItemIcon><DashboardIcon/></ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                        </ListItem> 
                
                        <ListItem button key='Dashboard'>
                        <ListItemIcon><img src={RequestsIcon} alt="request icon" /></ListItemIcon>
                        <ListItemText>Requests</ListItemText>
                        </ListItem>
              
                        <ListItem button key='Dashboard'>
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
