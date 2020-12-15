import React, { useContext, useState }  from 'react';
import { useHistory,Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Button, Hidden, IconButton, makeStyles } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../assets/images/logo.png';
import Typography from '@material-ui/core/Typography';
import { AuthContext } from '../../contexts/AuthContext';
import { SET_LOG_OUT} from '../../actions/types';
import toaster from '../../helpers/toasts';
import { toast, ToastContainer, Zoom } from 'react-toastify';

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
        text: <Button color="primary">
                 <AccountCircleIcon style={{width: 50, height: 50,}} />
             </Button> 
    },
    {
        text: <Typography variant="h6" color="subtitle" style={{fontSize: '0.7rem'}}>
                John Doe
            </Typography>
    },
];
const useStyles = makeStyles((theme) => ({
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
        height: 200,
        paddingLeft: theme.spacing(4),
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
        paddingRight: 10,
        height: 60,
        width: 60
    },
    profile: {
        width: 200,
        height: 80,
        background: 'blue',
        color: 'white',
        marginTop: 70,
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'column'
    }
}))
const AuthHeader = () => { 
    const history = useHistory();
    const classes = useStyles();
    const [profile, setProfile] = useState(false)
    const [hideNav, setHideNow ] = useState(false)
    const { dispatch } = useContext(AuthContext);
    const handleNavLinks = (e) => {
        setHideNow(!hideNav)
    }
    const handleClick = () => {
        setProfile(!profile)
    }
    const handleLogOut = () => {
       dispatch({type: SET_LOG_OUT})
       toaster('Logged out successfully', 'success')
    }
    return (
        <> 
            <ToastContainer 
                draggable={true} 
                transition={Zoom} 
                autoClose={8000} 
                position={toast.POSITION.TOP_CENTER}
            />
            <AppBar  style={{height: '70px', boxShadow: '0 3px 6px rgba(0,0,0,0.1)'}} component="nav" className={classes.root}>        
                <div style=
                {{
                    width: '10%',
                    margin: 0,
                    padding: 2
                    }}>
                    <img  onClick={() => history.push('/')}
                    style=
                    {{
                        margin: 0,
                        padding: 0,
                        width: '88px',
                        height: '98%',
                        cursor: 'pointer'
                    }}
                    src={logo} alt="Barefoot Loog" />
                </div>
                <Hidden only={['sm', 'xl', 'xs']}>
                <List className={classes.container} >
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
                    <Typography className={classes.list} onClick={handleClick}>
                        <ListItemText >{links[4].text}</ListItemText>
                    </Typography>
                    <Typography  className={classes.list}>
                        <ListItemText >{links[5].text}</ListItemText>
                    </Typography>
                </List> 
            </Hidden>
            {hideNav && (
            <Hidden only={['lg', 'md']}>
                <List className={classes.mobileContainer} >
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
                <Typography className={classes.mobileNav} onClick={handleClick}>
                    <ListItemText >{links[4].text}</ListItemText>
                </Typography>
                <Typography  className={classes.mobileNav}>
                    <ListItemText >{links[5].text}</ListItemText>
                </Typography>
                </List> 
            </Hidden> 
            )}
            <Hidden only={['lg', 'md']}>
            <IconButton
            edge="start"
            color="inherit"
            aria-controls="links-menu"
            aria-haspopup="true"
            >
            <MenuIcon 
            className={classes.menuIcon}
            onClick={handleNavLinks}
            />
            </IconButton>
            </Hidden> 
        </AppBar>
            {profile && <div className={classes.profile}>
                <Button color="inherit">Profile</Button>
                <Button color="inherit" onClick={handleLogOut}>Log out</Button>
            </div>
            }  
        </>
    );
}

export default AuthHeader;