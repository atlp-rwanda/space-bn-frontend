import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Hidden, IconButton, makeStyles } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../assets/images/logo.png'

const links = [
    {
        url: '/about',
        text: 'About Us',
        isActive: false
    },
    {
        url: '/faq',
        text: 'FAQ',
        isActive: false
    },
    {
        url: '/booking',
        text: 'Booking',
        isActive: false
    },
    {
        url: '/contact',
        text: 'Contact Us',
        isActive: false
    },
    {
        url: '/signup',
        text: 'Signup',
        isActive: false
    },
    {
        url: '/login',
        text: 'Login',
        isActive: true
    },
];
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        background: theme.palette.common.white,
        color: theme.palette.common.black
    },
    list: {
        color: theme.palette.common.black,
        marginRight: 20,
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
        marginTop: 80,
        background: theme.palette.primary.dark,
        height: 200,
        paddingLeft: theme.spacing(4),
        color: 'white',
        right: 0,
        top: 0,
        position: 'fixed'
    },
    /**End of mobile view nav */
    logo: {
        width: 60,
        height: 30,
        margin: `10px, 0px`
    },
    container: {
        marginRight: 20,
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
    },
    activeLink: {
        background: '#2196F3', 
        width: 90, 
        textAlign: 'center',
        color: theme.palette.common.white
    },
    menuIcon: {
        color: theme.palette.common.black,
        alignSelf: 'center',
        paddingRight: 10,
        height: 40,
        width: 40,
    }
}))
const Header = () => {
    const classes = useStyles();
    const [hideNav, setHideNow ] = useState(false)
    const handleNavLinks = (e) => {
        setHideNow(!hideNav)
    }
    return ( 
        <AppBar  component="nav" className={classes.root}>
            <Button style={{borderRadius: '20%'}}>
                <img src={logo} alt="Barefoot normad logo" className={classes.logo}/>
            </Button>
            <Hidden only={['sm', 'xl', 'xs']}>
                <List className={classes.container} >
                    {links.map((link, index) => (
                    <Link to={link.url} key={index} className={classes.list}>
                        <ListItemText className={link.isActive && classes.activeLink}>{link.text}</ListItemText>
                    </Link>
                    ))}
                </List> 
            </Hidden>
            {hideNav && (
            <Hidden only={['lg', 'md']}>
                <List className={classes.mobileContainer} >
                {links.map((link, index) => (
                <Link to={link.url} key={index} className={classes.mobileNav}>
                    <ListItemText className={link.isActive && classes.activeLink}>{link.text}</ListItemText>
                </Link>
                ))}
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
    );
}

export default Header;