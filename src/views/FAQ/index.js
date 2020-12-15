import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import {useStyles} from '../../shared/styles/FaqStyles';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from '../../components/SearchBar';
import { Badge } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const FAQ = () => {
  const classes = useStyles();
  const HandleSearch = () => {
  // do some implementations
  }
  return (
    <>
      <Header />
      <div className={classes.faqContainer}>
        <div className={classes.searchContainer}>
          <Toolbar className={classes.toolbar}>
          <SearchBar HandleSearch={HandleSearch} prop={`Search Topic`}/>
          </Toolbar>
        </div>
        <div className={classes.questionContainer}>
          <div className={classes.leftDivider}>
            <div className={classes.contentContainer}>
                <Badge badgeContent={1} color="primary" classes={{badge: classes.badge}}/>
                <div className={classes.content}>
                  <Typography variant="h6" className={classes.title}>Accomodation booking</Typography>
                  <Typography className={classes.body}>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <Link to="/faq/more" className={classes.links}>More</Link>
                </div>
            </div>
            <div>
              <Badge badgeContent={2} color="primary" classes={{badge: classes.badge}}/>
              <div className={classes.content}>
                <Typography variant="h6" className={classes.title}>Loging in Account</Typography>
                <Typography className={classes.body}>
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Link to="/faq/more" className={classes.links}>More</Link>
              </div>
            </div>
          </div>
          <div className={classes.leftDivider}>
            <div className={classes.contentContainer}>
              <Badge badgeContent={3} color="primary" classes={{badge: classes.badge}}/>
              <div className={classes.content}>
                <Typography variant="h6" className={classes.title}>Asking questions</Typography>
                <Typography variant="body1" className={classes.body}>
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Link to="/faq/more" className={classes.links}>More</Link>
              </div>
            </div>
            <div>
              <Badge badgeContent={4} color="primary" classes={{badge: classes.badge}}/>
              <div className={classes.content}>
                <Typography variant="h6" className={classes.title}>Creating an Account</Typography>
                <Typography className={classes.body}>
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Link to="/faq/more" className={classes.links}>More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
import React, { useState } from 'react';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import {useStyles} from '../../shared/styles/SignupStyles';

// ----------------------------------------------------------
// import React from 'react';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';


// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },
//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
// }));


const FAQ = () => {
  const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="secondary">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton aria-label="show 11 new notifications" color="inherit">
//           <Badge badgeContent={11} color="secondary">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

  // return (
  //   <div className={classes.grow}>
  //     <AppBar position="static">
  //       <Toolbar>
  //         <IconButton
  //           edge="start"
  //           className={classes.menuButton}
  //           color="inherit"
  //           aria-label="open drawer"
  //         >
  //           <MenuIcon />
  //         </IconButton>
  //         <Typography className={classes.title} variant="h6" noWrap>
  //           Material-UI
  //         </Typography>
  //         <div className={classes.search}>
  //           <div className={classes.searchIcon}>
  //             <SearchIcon />
  //           </div>
  //           <InputBase
  //             placeholder="Search…"
  //             classes={{
  //               root: classes.inputRoot,
  //               input: classes.inputInput,
  //             }}
  //             inputProps={{ 'aria-label': 'search' }}
  //           />
  //         </div>
  //         <div className={classes.grow} />
  //         <div className={classes.sectionDesktop}>
  //           <IconButton aria-label="show 4 new mails" color="inherit">
  //             <Badge badgeContent={4} color="secondary">
  //               <MailIcon />
  //             </Badge>
  //           </IconButton>
  //           <IconButton aria-label="show 17 new notifications" color="inherit">
  //             <Badge badgeContent={17} color="secondary">
  //               <NotificationsIcon />
  //             </Badge>
  //           </IconButton>
  //           <IconButton
  //             edge="end"
  //             aria-label="account of current user"
  //             aria-controls={menuId}
  //             aria-haspopup="true"
  //             onClick={handleProfileMenuOpen}
  //             color="inherit"
  //           >
  //             <AccountCircle />
  //           </IconButton>
  //         </div>
  //         <div className={classes.sectionMobile}>
  //           <IconButton
  //             aria-label="show more"
  //             aria-controls={mobileMenuId}
  //             aria-haspopup="true"
  //             onClick={handleMobileMenuOpen}
  //             color="inherit"
  //           >
  //             <MoreIcon />
  //           </IconButton>
  //         </div>
  //       </Toolbar>
  //     </AppBar>
  //     {renderMobileMenu}
  //     {renderMenu}
  //   </div>
  // );
  return ( 
    <>
    <Header />
    <br />
    <br />
    <br />
      <div className={classes.signupContainer}>
        <h1 style={{color: '#000'}}>Hello Sam</h1>
      </div>
      <Footer />
    </>
    
  )
}

export default FAQ;