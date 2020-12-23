import { makeStyles } from '@material-ui/core/styles'


export const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));

export const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableHead: {
      fontWeight: 800,
      fontFamily: `'Poppins', sans-serif;`,
      '@media(max-width: 600px)': {
        fontSize: 13,
      }
    },
    root: {
      textAlign: 'center', 
      marginLeft: '5%', 
      marginTop: 130, 
      marginRight: '5%', 
      marginBottom: 150,
  },
  wrapper: {
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginBottom: 20
  },
  cell: {
    '@media(max-width: 600px)': {
      fontSize: 12,
    }
  },
  addBtn: {
      width: 35,
      height: 30,
  },
  title: {
      fontWeight: 800,
      fontFamily: `'Poppins', sans-serif;`,
      '@media(max-width: 600px)': {
        fontSize: 18,
        fontWeight: 700
      }
  },
  tooltip: {
    marginLeft: 'auto', 
    marginRight: 20
  },
  filter: {
    width: 20, 
    height: 30, 
    borderRadius: '100%',
    marginLeft: 'auto', 
    marginRight: 20
  }
});
