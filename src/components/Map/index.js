import React from 'react';
import { Link } from 'react-router-dom';
import {MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import locationIcon from '../../assets/icons/location.svg';
import hotelIcon from '../../assets/icons/hotel.svg';
import { useStyles } from '../../shared/styles/CardStyles';
import config from '../../config/config';
import { Button, Typography, Grid} from '@material-ui/core';

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
            {searchValue.map((hotelCoordinate, index) => (
                <Marker position={hotelCoordinate.coordinates} icon={Skater} key={index}>
                <Popup>
                    <div className={classes.popup}>
                        <div className={classes.contentLeft}>
                            <h5>{hotelCoordinate.name}</h5>
                            <div className={classes.rank} style={{margin: 0}}>
                                {hotelCoordinate.starNmbr}<span>
                                    {hotelCoordinate.rating.map((star,i) => (
                                        <p style={{display: 'inline-block'}} key={i}>{star}</p>   
                                    ))}
                                </span>
                            </div>
                            <Typography variant="h6" style={{fontSize: '0.7rem', marginTop: -15, marginBottom: 5}}>
                                    {hotelCoordinate.stars}
                            </Typography>
                            <Grid item sm={12} container >
                                    <Grid item xs>
                                        <div>
                                          <p className={classes.spanText} style={{fontSize: '0.5rem', marginTop: -5}}><span className={classes.spanIcon}>{hotelCoordinate.pool.icon}</span>{hotelCoordinate.pool.label}</p>
                                        </div>
                                    </Grid>                
                                    <Grid item xs>
                                        <div>
                                        <p className={classes.spanText} style={{fontSize: '0.5rem', marginTop: -5}}><span className={classes.spanIcon}>{hotelCoordinate.parking.icon}</span>{hotelCoordinate.parking.label}</p>
                                        </div>
                                    </Grid>                
                            </Grid>
                            <Grid item sm={12} container>
                                    <Grid item xs>
                                        <div>
                                            <p className={classes.spanText} style={{fontSize: '0.5rem', marginTop: -20}}><span className={classes.spanIcon}>{hotelCoordinate.wifi.icon}</span>{hotelCoordinate.wifi.label}</p>
                                        </div>
                                    </Grid>                
                                    <Grid item xs>
                                        <div>
                                        <p className={classes.spanText} style={{fontSize: '0.5rem', marginTop: -20}}><span className={classes.spanIcon}>{hotelCoordinate.breakFast.icon}</span>{hotelCoordinate.breakFast.label}</p>
                                        </div>
                                    </Grid>
                            </Grid>
                            <Link to="hotel/more" style={{textDecoration: 'none'}} > 
                            <Button variant="outlined" color="primary" style={{width:150, fontSize: '0.7rem', textDecoration: 'none'}}>
                                <img src={hotelIcon} alt="hotel icon" className={classes.hotelIcon}/>
                                <span className={classes.span} >Check avilability</span>
                            </Button>
                            </Link> 
                        </div>
                        <p className={classes.popupPrice}>{hotelCoordinate.price}</p>
                        <img src={hotelCoordinate.imag} alt={hotelCoordinate.name} className={classes.popupImg}/>
                    </div>
                </Popup>
                <Tooltip>
                    <h3>{hotelCoordinate.name}</h3>
                    <img src={hotelCoordinate.imag} alt={hotelCoordinate.name} className={classes.toolTipImg}/>
                    <p className={classes.toolTip}>{hotelCoordinate.price}</p>
                </Tooltip>
            </Marker>
            ))}
            {activePopup && (
            <Marker position={hotelPosition}>
                <Popup>
                    <h3>{activeHotel.name}</h3>
                    <img src={activeHotel.imag} alt={activeHotel.name} className={classes.toolTipImg}/>
                    <p className={classes.toolTip}>{activeHotel.price}</p>
                </Popup>
            </Marker>
            )}
        </MapContainer>
     );
}
 
export default MapLocation;