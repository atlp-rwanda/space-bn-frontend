import {  makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
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

    leftNavWrapper: {
      '@media (min-width: 1200px)' : {
        width: '4% !important'
        
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