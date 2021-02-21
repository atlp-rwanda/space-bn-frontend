import React, { useContext, useState, useEffect, useRef  }  from 'react';
import io from 'socket.io-client';
import Axios from 'axios';
import { useHistory,Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden, IconButton,InputBase, Menu, Fade, MenuItem} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../assets/images/logo.png';
import { AuthContext } from '../../contexts/AuthContext';
import { SET_LOG_OUT, SET_NOTIFICATION_ERROR, SET_NOTIFICATION_LOADING, SET_NOTIFICATION_RESPONSE} from '../../actions/types';
import toaster from '../../helpers/toasts';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from '@material-ui/icons/Search';
import NotificationDialog from '../Notifications';
import linksFnc from '../../helpers/links';
import { useStyles } from '../../shared/styles/AuthHeaderStyles';
import { NotificationContext } from '../../contexts/NotificationContext';
import { useTranslation } from "react-i18next";
import Dropdown from "../../helpers/dropdown";

const { REACT_APP_BACKEND_URL } = process.env;

const AuthHeader = ({onDashboard=false, handleOpen}) => { 
    const history = useHistory();
    const classes = useStyles();
    const [hideNav, setHideNow ] = useState(false)
    const authContext = useContext(AuthContext);
    const { _notifications, dispatch } = useContext(NotificationContext);
    const [openNotification, setOpenNotification] = useState(false)
    const [notifNmbr, setNotifNmbr] = useState(0)
    const { t } = useTranslation();
    const handleNavLinks = (e) => {
        setHideNow(!hideNav)
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const userName = localStorage.getItem('userName');
    const links = linksFnc(userName);
    
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLogOut = () => {
       authContext.dispatch({type: SET_LOG_OUT})
       toaster(t('Logged out successfully'), 'success')
       setTimeout(()=>{
        localStorage.removeItem("userToken")
        history.push('/login')
       }, 4000)
    }
    
    // connect to socket and display notifications
    const socketRef = useRef();
    const allNotifications = _notifications.savedNotifications
    useEffect(() => {
      socketRef.current = io.connect(`${REACT_APP_BACKEND_URL}`)
      const userId = localStorage.getItem('userId');
      socketRef.current.emit('join notification', {id: `notification_${userId}`});
      socketRef.current.on('pending', notification => {
        toaster(notification.message, 'success')
      });
      socketRef.current.on('approved', notification => {
        toaster(notification.message, 'success')
      });
      socketRef.current.on('rejected', notification => {
        toaster(notification.message, 'success')
      })
    }, [allNotifications]);
    useEffect(() => {
      dispatch({type: SET_NOTIFICATION_LOADING})
      const token = localStorage.getItem('userToken')
      const currentLng = localStorage.getItem('i18nextLng');
      Axios.get(`${REACT_APP_BACKEND_URL}/notifications`, {
        headers: {
          'authorization': token,
          "Accept-Language": currentLng
        }
      })
      .then((res) => {
        dispatch({type: SET_NOTIFICATION_RESPONSE, payload: res.data})
        const notifArr = res.data.savedNotifications
        const filteredNotif = notifArr.filter(notif => notif.status === 'unread')
        setNotifNmbr((filteredNotif).length)
      })
      .catch((err) => {
        dispatch({type: SET_NOTIFICATION_ERROR, payload: err.response.message})
      })
    },[dispatch, allNotifications])

    const handleDialogPane = () => {
      setOpenNotification(true)
    }
    return (
      <> 
        <ToastContainer 
          draggable={true} 
          transition={Zoom} 
          autoClose={8000} 
          position={toast.POSITION.TOP_CENTER}
        />
        <AppBar  style={{height: '70px', boxShadow: '0 3px 6px rgba(0,0,0,0.1)', display:'flex', alignItems:'center'}} component="nav" className={classes.root}>        
          <div className={classes.leftNavWrapper} style=
          {{
              width: '15%',
              margin: 0,
              padding: 2,
              display: 'flex',
              justifyContent:'space-between',
              alignItems: 'center'
              }}>
                  
              {(onDashboard)?(
                <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                data-testid = 'triggerSidebar'
                onClick={() => handleOpen()}
                style={{width: '70px',height:'70px'}}
            >
                <MenuIcon sytle={{width: '70%'}}/>
            </IconButton>
              ): (null)}
              <img  onClick={() => history.push('/')}
              style=
              {{
                  margin: 0,
                  padding: 0,
                  width: '65px',
                  height: '55px',
                  
                  cursor: 'pointer'
              }}
              src={logo} alt="Barefoot Loog" />
              
          </div>
          <Dropdown />
          {(onDashboard)?(
              <div style={{width: '30%', height: '40px'}} className={classes.search} data-testid="searchInput">
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase 
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>     
          ):(null)}             
          <Hidden only={['sm', 'xl', 'xs']} >
            <List className={classes.container} >
                {(!onDashboard)
                  ? 
                  (
                  <>
                  <Link to={links[0].url} className={classes.list}>
                  <ListItemText >{links[0].text}</ListItemText>
                  </Link>
                  <Link to={links[1].url} className={classes.list}>
                      <ListItemText >{links[1].text}</ListItemText>
                  </Link>
                  <Link to={links[2].url} className={classes.list}>
                      <ListItemText >{links[2].text}</ListItemText>
                  </Link>
                  <Link to={links[3].url} className={classes.list}>
                      <ListItemText >{links[3].text}</ListItemText>
                  </Link>
                  </>
                  ): 
                  (
                    <>
                      <div className={classes.grow} />
                      <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                          <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                          </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit" onClick={handleDialogPane}>
                          <Badge badgeContent={notifNmbr} color="secondary">
                            <NotificationsIcon />
                          </Badge>
                        </IconButton>                            
                      </div>                         
                    </>                            
                  )

                  }
              
              <div className={classes.list} >
                  <ListItemText onClick={handleClick} className="test">{links[4].text}</ListItemText>
              </div>
            </List> 
          </Hidden>
          {hideNav && (
          <Hidden style={{height:'300px'}} only={['lg', 'md']} >
            <List className={classes.mobileContainer} style={{height: '200px !important'}}>
              {(!onDashboard) ? (
                <>
                  <Link to={links[0].url} className={classes.mobileNav}>
                      <ListItemText >{links[0].text}</ListItemText>
                  </Link>
                  <Link to={links[1].url} className={classes.mobileNav}>
                      <ListItemText >{links[1].text}</ListItemText>
                  </Link>
                  <Link to={links[2].url} className={classes.mobileNav}>
                      <ListItemText >{links[2].text}</ListItemText>
                  </Link>
                  <Link to={links[3].url} className={classes.mobileNav}>
                      <ListItemText >{links[3].text}</ListItemText>
                  </Link>                   
                </>

              ):
              (
              <>
                <List style={{display: 'flex', flexDirection: 'column',
                  width: '150px', alignItems:'left', marginLeft: '0'}}>
                  <ListItem data-testid="messages" style={{marginLeft: '-7%'}}>
                      <IconButton aria-label="show 4 new mails" color="inherit">
                      <Badge badgeContent={4} color="secondary">
                          <MailIcon />
                      </Badge>
                      </IconButton>
                      <ListItemText sytle={{fontZize: '13px'}}>{t('Messages')}</ListItemText>
                  </ListItem>
                  <ListItem data-testid="notifications" style={{marginLeft: '-7%'}}> 
                      <IconButton aria-label="show 11 new notifications" color="inherit" onClick={handleDialogPane}>
                      <Badge badgeContent={notifNmbr} color="secondary">
                          <NotificationsIcon />
                      </Badge>
                      </IconButton>
                      <ListItemText sytle={{fontZize: '13px'}}>{t('Notifications')}</ListItemText>
                  </ListItem>
                </List>                  
              </>
              )
              }   
              <div className={classes.mobileNav} >
                  <ListItemText onClick={handleClick} className="test">{links[4].text}</ListItemText>
              </div>
            </List> 
          </Hidden> 
            )}
          <Hidden only={['lg', 'md']}>
            <IconButton
            edge="start"
            color="inherit"
            aria-controls="links-menu"
            aria-haspopup="true"
            onClick={handleNavLinks}
            style={{width: '20%'}}
            >
            <MenuIcon 
            className={classes.menuIcon}
            />
            </IconButton>
          </Hidden> 
        </AppBar>
        {open && 
        <Menu
            ria-controls="simple-menu" 
            aria-haspopup="true"
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            className={classes.profile}
        >
            <MenuItem color="inherit" onClick={()=> {history.push('/profile')}}><PersonIcon />{t('Profile')}</MenuItem>
            <MenuItem color="inherit" onClick={()=> {history.push('/profileview')}}><PersonIcon />{t('Edit')}</MenuItem>
            <MenuItem color="inherit" onClick={handleLogOut} ><LockIcon />{t('Log out')}</MenuItem>
        </Menu>
        }
        {
          openNotification && < NotificationDialog openNotification={openNotification} setOpenNotification={setOpenNotification} />
        }  
     </>
    );
}

export default AuthHeader;