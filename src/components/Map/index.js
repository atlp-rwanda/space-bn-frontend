import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import locationIcon from '../../assets/icons/location.svg';
import { useStyles } from '../../shared/styles/CardStyles';
import config from '../../config/config';
import { Button, Typography, Grid} from '@material-ui/core';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import WifiIcon from '@material-ui/icons/Wifi';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import PoolIcon from '@material-ui/icons/Pool';

const {
    REACT_APP_SPACE_BN_TOKEN, 
    REACT_APP_SECRET_USERNAME, 
    REACT_APP_SECRET_PASSWORD
} = config;

const url = `https://api.mapbox.com/styles/v1/${REACT_APP_SECRET_USERNAME}/${REACT_APP_SECRET_PASSWORD}/tiles/256/{z}/{x}/{y}@2x?access_token=${REACT_APP_SPACE_BN_TOKEN}`
const position = [-1.970579, 30.104429]
const zoom = 13;

const Skater = new Icon({
    iconUrl:locationIcon,
    iconSize:[30, 30],
});

export const SubMap = () => {

        const posSerena= [-1.9553824506281774, 30.0646717204476];

    return(
        <MapContainer center={posSerena} zoom={zoom} style={{height:'100%', width:'100%'}}>
            <TileLayer
                attribution='&copy; 2020 <a href="/">space-bn</a> contributors'
                url={url}
            />
            <Marker position={posSerena} icon={Skater}/>
            
        </MapContainer>
    )
}

const MapLocation = ({searchValue, activePopup, hotelPosition, activeHotel}) => {
    
    const classes = useStyles();
    return (
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} className={classes.map}>
            <TileLayer
                attribution='&copy; 2020 <a href="/">space-bn</a> contributors'
                url={url}
            />
            {searchValue && searchValue.map((value, index) => (
                <Marker
                    position={value.coordinates}
                    key={index}
                    icon={Skater}
                >
                <Popup>
                    <div className={classes.popup}>
                        <div className={classes.contentLeft}>
                            <h5>{value.hotelname}</h5>
                            <div className={classes.rank} style={{margin: 0}}>
                                {value.ranking}
                                <span>
                                    <p style={{display: 'inline-block'}}
                                    >
                                    {value.ranking}
                                    </p>   
                                </span>
                            </div>
                            <Typography variant="h6" style={{fontSize: '0.7rem', marginTop: -15, marginBottom: 5}}>
                                    {value.ranking}
                            </Typography>
                            <Grid item sm={12} container >
                                    <Grid item xs>
                                        <div>
                                            <p className={classes.spanText} style={{fontSize: '0.5rem', marginTop: -5}}><span className={classes.spanIcon}>
                                            <PoolIcon style={{width:20,height: 13,}}/>
                                            </span>{value.swimmingpool}</p>
                                        </div>
                                    </Grid>                
                                    <Grid item xs>
                                        <div>
                                        <p className={classes.spanText} style={{fontSize: '0.5rem', marginTop: -5}}><span className={classes.spanIcon}>
                                        <LocalParkingIcon style={{width:20,height: 13,}}/>
                                        </span>{value.parking.label}</p>
                                        </div>
                                    </Grid>                
                            </Grid>
                            <Grid item sm={12} container>
                                    <Grid item xs>
                                        <div>
                                            <p className={classes.spanText} 
                                                style={{fontSize: '0.5rem', marginTop: -20}}
                                            >
                                                <span className={classes.spanIcon}>
                                                    <WifiIcon style={{width:20,height: 13,}}/>
                                                    
                                                </span>
                                                    {value.wifi}
                                            </p>
                                        </div>
                                    </Grid>                
                                    <Grid item xs>
                                        <div>
                                        <p className={classes.spanText} style={{fontSize: '0.5rem', marginTop: -20}}><span className={classes.spanIcon}>
                                        <FreeBreakfastIcon style={{width:20,height: 13,}}/>
                                        </span>{value.breakfast}</p>
                                        </div>
                                    </Grid>
                            </Grid>
                            <Link to="/booking" style={{textDecoration: 'none'}} > 
                            <Button variant="outlined" color="primary" style={{width:150, fontSize: '0.7rem', textDecoration: 'none'}}>
                                <img src={value.image} alt="hotel icon" className={classes.hotelIcon}/>
                                <span className={classes.span} >Check avilability</span>
                            </Button>
                            </Link> 
                        </div>
                        <p className={classes.popupPrice}>{value.pricerange}</p>
                        <img src={value.image} alt={value.hotelname} className={classes.popupImg}/>
                    </div>
                </Popup>
                <Tooltip>
                    <h3>{value.hotelname}</h3>
                    <img src={value.image} alt={value.hotelname} className={classes.toolTipImg}/>
                    <p className={classes.toolTip}>{value.pricerange}</p>
                </Tooltip>
            </Marker>
            ))}
            {activePopup && (
            <Marker position={hotelPosition}>
                <Popup>
                    <h3>{activeHotel.hotelname}</h3>
                    <img src={activeHotel.image} alt={activeHotel.hotelname} className={classes.toolTipImg}/>
                    <p className={classes.toolTip}>{activeHotel.pricerange}</p>
                </Popup>
            </Marker>
            )}
        </MapContainer>
    );
}

export default MapLocation;
