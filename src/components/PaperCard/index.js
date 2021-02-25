import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles }  from '../../shared/styles/CardStyles';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import WifiIcon from '@material-ui/icons/Wifi';
import Rating from '@material-ui/lab/Rating';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import PoolIcon from '@material-ui/icons/Pool';

const PaperCard = ({searchValue, activePopup, setActivePopup, setHotelPosition, setActiveHotel }) => {
    const classes = useStyles();
    const theme = createMuiTheme();
    const matcheBreakpoint = useMediaQuery(theme.breakpoints.only('sm'));
    
    const HandleDisplay = (e) => {
        setActivePopup(!activePopup);
        setHotelPosition(searchValue[e].coordinates)
        setActiveHotel(searchValue[e]);
    }
    
    return (
        <div className={classes.root}> 
        {searchValue && searchValue.map((value, index) => (
            <Paper className={classes.paper}
            key={index}
            onClick={() => HandleDisplay(index)} data-testid="paper"
            >
                <Grid container spacing={2} className={classes.main}>
                    <Grid item xs={12} sm container >
                            <Grid item xs className={classes.hotelDetails}>
                            <Grid item xs>
                                <Typography  gutterBottom variant="h6" className={classes.left}>
                                {value.hotelname}
                                </Typography>
                                <div className={classes.rank}>
                                    <span className={classes.nberStars}>
                                    <Typography  gutterBottom>{value.location}</Typography>
                                        {value.ranking}
                                    </span>
                                    <Rating name="half-rating" readOnly defaultValue={value.ranking} precision={0.5} size="small" className={classes.stars} />
                                </div>
                                <Grid item>
                                    <Typography variant="subtitle1" className={classes.price}>
                                        {value.pricerange}<span style={{ fontSize: '12px' }}>/per night</span>
                                    </Typography>
                                </Grid>
                                <Grid item sm={12} container >
                                    <Grid item xs>
                                        <div>
                                            <p className={classes.spanText}>
                                                <span className={classes.spanIcon}>
                                                    <PoolIcon style={{width:20,height: 13,}}/>
                                                </span>
                                                {value.swimmingpool}
                                            </p>
                                        </div>
                                    </Grid>                
                                    <Grid item xs>
                                        <div>
                                        <p className={classes.spanText}>
                                            <span className={classes.spanIcon}>
                                                <LocalParkingIcon style={{width:20,height: 13,}}/>
                                            </span>
                                            {value.parking}
                                        </p>
                                        </div>
                                    </Grid>                
                                </Grid>
                                <Grid item sm={12} container spacing={matcheBreakpoint ? 3 : 0}>
                                    <Grid item xs>
                                        <div>
                                            <p className={classes.spanText}>
                                                <span className={classes.spanIcon}>
                                                    <WifiIcon style={{width:20,height: 13,}}/>
                                                </span>
                                                {value.wifi}
                                            </p>
                                        </div>
                                    </Grid>                
                                    <Grid item xs>
                                        <div>
                                        <p className={classes.spanText}>
                                            <span className={classes.spanIcon}>
                                                <FreeBreakfastIcon style={{width:20,height: 13,}}/>
                                            </span>
                                            {value.breakfast}
                                        </p>
                                        </div>
                                    </Grid>                
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <img src={value.image} alt="hotel" className={classes.img}/>
                    </Grid>
                </Grid>
            </Paper>
        ))}
        </div>
    );
}

export default PaperCard;
