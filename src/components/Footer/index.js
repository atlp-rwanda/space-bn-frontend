import React from 'react';
import Typography  from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import facebookRect from '../../assets/icons/facebook-rect.png';
import instagramIcon from '../../assets/icons/instagram.png';
import linkedIn from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';
import { CssBaseline } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:'100%',
        height: 70,
        background: '#FFFFFF',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        borderTop: '1px solid #333',
        '@media(max-width: 610px)': {
            flexDirection: 'column',
            paddingTop: theme.spacing(1)
        },
        '@media(max-width: 400px)': {
            paddingBottom: theme.spacing(4),
            justifyContent: 'unset',
            marginBottom: 50,
        }
    },
    icon: {
        width: 40,
        height: 40,
        padding: theme.spacing(1),
        "&:hover": {
            transform: 'scale(1.2)',
        }    
    },
    anchor: {
        padding: theme.spacing(1),
        '@media(max-width: 400px)': {
            padding: theme.spacing(0),
        }
    },
    body: {
        fontFamily: 'Poppins, sans-serif',
        '@media(max-width: 400px)': {
            paddingTop: 20,
            marginLeft: 25,
        },
        '@media(max-width: 230px)': {
            paddingTop: 0,
            marginLeft: 3,
        }
    }
}));

const Footer = () => {
    const classes = useStyles();
    return ( 
        <>
            <CssBaseline />
            <footer className={classes.root}>
                <Typography variant="body1" className={classes.body} data-testid="typography">
                    {`© ${new Date().getFullYear()} | Barefoot Normad  | All Rights Reserved`}
                </Typography>
                <div>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={classes.anchor}>
                        <img src={linkedIn} alt="linkedin link icon" className={classes.icon}/>   
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={classes.anchor}>
                        <img src={facebookRect} alt="facebook link icon" className={classes.icon}/>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={classes.anchor}>
                        <img src={twitter} alt="twitter link icon" className={classes.icon}/>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className={classes.anchor}>
                        <img src={instagramIcon} alt="instagram link icon" className={classes.icon}/>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;