import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles }  from '../../shared/styles/CardStyles';



const PaperCard = ({searchValue, activePopup, setActivePopup, setHotelPosition, setActiveHotel }) => {
    const classes = useStyles();
    const theme = createMuiTheme();
    const matcheBreakpoint = useMediaQuery(theme.breakpoints.only('sm'));
     
    const HandleDisplay = (e) => {
        setActivePopup(!activePopup)
        setHotelPosition(searchValue[e].coordinates)
        setActiveHotel(searchValue[e])
    }

    return (
        <div className={classes.root}> 
        {searchValue.map((value, index) => (
            <Paper className={classes.paper} key={index} onClick={() => HandleDisplay(index)}>
                <Grid container spacing={2} className={classes.main}>
                    <Grid item xs={12} sm container >
                        <Grid item xs container direction="column">
                            <Grid item xs>
                                <Typography  gutterBottom variant="h6" className={classes.left}>{value.name}</Typography>
                                <div className={classes.rank}>
                                    {value.starNmbr}<span>
                                        {value.rating.map((star,i) => (
                                            <p style={{display: 'inline-block'}} key={i}>{star}</p>          
                                        ))}
                                    </span>
                                </div>
                                <Typography variant="h6" >
                                    {value.stars}
                                </Typography>
                                <Grid item sm={12} container >
                                    <Grid item xs>
                                        <div>
                                          <p className={classes.spanText}><span className={classes.spanIcon}>{value.pool.icon}</span>{value.pool.label}</p>
                                        </div>
                                    </Grid>                
                                    <Grid item xs>
                                        <div>
                                        <p className={classes.spanText}><span className={classes.spanIcon}>{value.parking.icon}</span>{value.parking.label}</p>
                                        </div>
                                    </Grid>                
                                </Grid>
                                <Grid item sm={12} container spacing={matcheBreakpoint ? 3 : 0}>
                                    <Grid item xs>
                                        <div>
                                            <p className={classes.spanText}><span className={classes.spanIcon}>{value.wifi.icon}</span>{value.wifi.label}</p>
                                        </div>
                                    </Grid>                
                                    <Grid item xs>
                                        <div>
                                        <p className={classes.spanText}><span className={classes.spanIcon}>{value.breakFast.icon}</span>{value.breakFast.label}</p>
                                        </div>
                                    </Grid>                
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" className={classes.price}>{value.price}</Typography>
                    </Grid>
                    <Grid item >
                        <img src={value.imag} alt="hotel 1" className={classes.img}/>
                    </Grid>
                </Grid>
            </Paper>
        ))}
        </div>
     );
}
 
export default PaperCard;