import React, { useContext, useState }  from 'react';
import { useHistory,Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Button, Hidden, IconButton,InputBase, makeStyles, Tooltip, Menu, Fade, MenuItem} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../assets/images/logo.png';
import { AuthContext } from '../../contexts/AuthContext';
import { SET_LOG_OUT} from '../../actions/types';
import toaster from '../../helpers/toasts';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from '@material-ui/icons/Search';


const links = [
    {
        url: '/about',
        text: 'About Us',
    },
    {
        url: '/faq',
        text: 'FAQ',
    },
    {
        url: '/booking',
        text: 'Booking',
    },
    {
        url: '/contact',
        text: 'Contact Us',
    },
    {
        text:<Tooltip title="John Doe" aria-label="username" placement="bottom"> 
                <Button color="primary">
                    <AccountCircleIcon style={{width: 50, height: 50,}} />
                </Button>
            </Tooltip> 
    },
];
const useStyles = makeStyles((theme) => ({
   
    menuButton: {
        color: '#2196F3',
      },

    root: {
        display: 'flex',
        flexDirection: 'row',
        background: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    list: {
        color: theme.palette.common.black,
        marginRight: 30,
        textDecoration: 'none',
        fontFamily: 'Poppins, sans-serif',
        "&:hover": {
            transform: 'scale(1.02)',
            color: theme.palette.secondary.light,
            cursor: 'pointer'
        } 
    },


    search: {
      position: 'relative',
      color: '#5E5E5E',
      background: '#ededed !important',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: (theme.palette.common.white, 0.25),
      },
      marginLeft: '20%',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: 'auto'
      },
      '@media (max-width: 299px)' : {
        display:'none'
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      color:'#2196F3',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },


    /*** start of mobile view nav ****/
    mobileNav: {
        color: theme.palette.common.white,
        marginRight: 10,
        textDecoration: 'none',
        fontFamily: 'Poppins, sans-serif',
        "&:hover": {
            transform: 'scale(1.02)',
            color: theme.palette.secondary.light,
            cursor: 'pointer'
        } 
    },
    mobileContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 70,
        background: '#2196F3',
        height: 230,
        paddingLeft: theme.spacing(1),
        color: 'black',
        right: 0,
        top: 0,
        position: 'fixed'
    },
    /**End of mobile view nav */
   
    container: {
        marginRight: 20,
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
    },
    activeLink: {
        background: '#2196F3',
        color: theme.palette.common.white,
        width: 90, 
        textAlign: 'center',
        borderRadius: 4,
    },
    menuIcon: {
        color: '#2196F3',
        alignSelf: 'center',
        height: 60,
    },
    profile: {
        marginTop: 55,
        display: 'flex',
        flexDirection: 'column',
    },
}))
const AuthHeader = ({onDashboard=false, handleOpen}) => { 
    const history = useHistory();
    const classes = useStyles();

 

 


    const [hideNav, setHideNow ] = useState(false)
    const { dispatch } = useContext(AuthContext);
    const handleNavLinks = (e) => {
        setHideNow(!hideNav)
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    const handleLogOut = () => {
       dispatch({type: SET_LOG_OUT})
       toaster('Logged out successfully', 'success')
           history.push('/login')
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
                
             

                <div style=
                {{
                    width: '15%',
                    margin: 0,
                    padding: 2,
                    display: 'flex',
                    justifyContent:'space-between'
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
                        width: '70px',
                       
                        cursor: 'pointer'
                    }}
                    src={logo} alt="Barefoot Loog" />
                    
                </div>

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
                              <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
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
                        <ListItemText sytle={{fontZize: '13px'}}>Messages</ListItemText>
                    </ListItem>
                    <ListItem data-testid="notifications" style={{marginLeft: '-7%'}}> 
                        <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                        </IconButton>
                        <ListItemText sytle={{fontZize: '13px'}}>Notifications</ListItemText>
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
                <MenuItem color="inherit" onClick={()=> {history.push('/profile')}}><PersonIcon />Profile</MenuItem>
                <MenuItem color="inherit" onClick={handleLogOut} ><LockIcon />Log out</MenuItem>
            </Menu>
            }  
        </>
    );
}

export default AuthHeader;