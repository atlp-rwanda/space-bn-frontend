import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    dialog: {
        position: 'absolute',
        right: 10,
        top: 40,
        maxHeight: '550px'
    },
    select: {
        borderRadius: 5,
        border: ' 2px solid #C4C9CD',
        marginLeft: 50,
        width: '128px',
        height: '35px'
    },
    selectContainer: {
      display: 'flex',
      flexDirection: 'row'
    },
    read: {
      display: 'flex',
      borderBottom: '1px solid #C4C9CD',
      background: '#FFFFFF',
      borderRadius: 0
    },
    card: {
      display: 'flex',
      borderBottom: '1px solid #C4C9CD',
      background: '#EBEFF1',
      borderRadius: 0,
      height: 80,
      '&:hover': {
          background: '#f4f4f4',
          cursor: 'pointer'
      }
    },
    header: {
      background: '#FFFFFF',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      boxShadow: '-3px 4px 4px -1px rgba(0, 0, 0, 0.25)',
      marginBottom: 5,
      height: 90
    },
    btn: {
        border: ' 2px solid #C4C9CD',
        width: 30,
        height: 25,
        '&:hover': {
            background: '#EBEFF1',
          fontWeight: 'bold',
          transform: 'scale(1.01)',
          cursor: 'pointer'
        }
    },
    tooltip: {
        color: '#C4C9CD',
        marginLeft: 20,
        height: '35px',
    },
    cardContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    link: {
        textDecoration:'none',
        color:'#1A68A6',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer',
        }
    },
    time: {
        display: 'flex',
        alignSelf: 'center',
    }
  });