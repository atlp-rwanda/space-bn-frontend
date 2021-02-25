import { makeStyles } from '@material-ui/core'
import amber from '@material-ui/core/colors/amber'

const primary = amber[800]
export const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0, 1),
    },
    paper: {
        maxWidth: '100%',
        height: 'auto',
        borderBottom:'1px solid #E2E2E2',
        padding: theme.spacing(1.4),
        marginTop: 1
    },
    main: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex', 
            flexDirection: 'column-reverse'
        } 
    },
    hotelDetails: {
        margin: '10px 0 10px 10px',
    },
    img: {
        width: 200,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 302
        } 
    },
    rank: {
        margin: 0
    },
    nberStars: {
        color: primary,
        fontSize: '16px',
    },
    stars: {
        color: primary
    },
    spanIcon: {
        color: theme.palette.common.grey,
    },
    spanText: {
       color:'rgb(0, 0, 0, 0.7)',
       fontSize: '0.9rem',
       fontFamily: `'Poppins', sans-serif;`,
    },
    left: {
       color: theme.palette.text.primary,
       fontSize: '1.4rem',
       fontFamily: `'Poppins', sans-serif;`
    },
    price: {
       color: primary,
       fontSize: '1.4rem',
       fontFamily: `'Poppins', sans-serif;`,
    },
    map: {
        marginTop: '9vh',
        width: '58vw',
        zIndex: 2,
        marginLeft: 5,
        '@media(max-width: 600px)': {
            width: 0           
        }
    },
    toolTipImg: {
        height: 100,
        width:'100%',
    },
    toolTip: {
        color: primary,
        textAlign: 'center',
        fontSize: '1rem',
        fontFamily: `'Poppins', sans-serif;`,
    },
    hotelIcon: {
        height: 20,
        width: 20
    },
    span: {
        width:150,
        fontFamily: `'Poppins', sans-serif;`,
        textTransform: 'capitalize',
        fontSize: '0.5rem'
    },
    popup: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    popupImg: {
        width: 100,
        paddingLeft: 20,
    },
   contentLeft: {
       display: 'flex',
       flexDirection: 'column',
       width: 200
   },
   popupPrice: {
    color: primary,
    width: 100,
    fontFamily: `'Poppins', sans-serif;`,
   }
}));
