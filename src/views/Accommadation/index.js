import React, { useState, useEffect } from "react";
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../shared/styles/AccommadationStyle";
import starIcon from "../../assets/icons/mdi_star.png";
import starIcon1 from "../../assets/icons/mdi_star1.png";
import cupIcon from "../../assets/icons/cupicon.png";
import poolIcon from "../../assets/icons/poolicon.png";
import wifiIcon from "../../assets/icons/wifiicon.png";
import taxIcon from "../../assets/icons/taxicon.png";
import SearchBar from "material-ui-search-bar";
import backImg from "../../assets/images/back1.png";
import axios from 'axios';


const Accommadation = () => {
  const classes = useStyles();
  const [hotels, setHotels] = useState([]);
  const [filterHotels, setFilterHotels] = useState(hotels);


  useEffect(() => {
    const fetchHotels = async() => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/hotels`);
      const fetchedHotels =
      res.data.hotels.map((hotel) =>{
        return {
        
          id: hotel.id,
          name: hotel.hotelname,
          price: hotel.pricerange,
          rate: hotel.ranking,
          image: hotel.image,
          location: hotel.location
        }
      })
      console.log(fetchedHotels)
      setHotels(fetchedHotels)
      setFilterHotels(fetchedHotels)
    }
    fetchHotels()
  }, [])

  const handleSearch = (newvalue) => {
    const filterHotel = hotels.filter((hotel) => {
      if (hotel.name.toLowerCase().includes(newvalue.toLowerCase().trim())) {
        return true;
      }
      return false;
    });
    setFilterHotels(filterHotel);
  };
  const HandleOnRequestSearch = () => {
    //do some implementations
}

  return (
    <>
    <section>
      <Header/>
      <img className={classes.headImg} src={backImg} alt="background" />
      <div className={classes.root}>
        <div>
          <SearchBar
            id="search"
            onChange={handleSearch}
            onRequestSearch={HandleOnRequestSearch}
            placeholder="search hotel"
            className={classes.search}
            value={''}
            inputProps={{ "data-testid": "search" }}
          />
        </div>

        {filterHotels.map((value, index) => (
          <NavLink
            key={index}
            to={`/${value.id}/rooms`}
            style={{ textDecoration: "none" }}
            className="carte"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={0}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h6" style={{color:'rgba(0, 0, 0, 0.87)', fontSize:'1.4rem', fontFamily: "'Poppins', sans-serif"}}>
                            {value.name}
                          </Typography>
                          <Typography variant="body2" gutterBottom style={{color:'#FFA500',fontSize:'1rem'}}>
                            {value.rate}{" "}
                            <span>
                              <img
                                className={classes.starIcon}
                                src={starIcon}
                                alt="star icon"
                              />
                              <img
                                className={classes.starIcon}
                                src={starIcon}
                                alt="star icon"
                              />
                              <img
                                className={classes.starIcon}
                                src={starIcon}
                                alt="star icon"
                              />
                              <img
                                className={classes.starIcon}
                                src={starIcon}
                                alt="star icon"
                              />
                              <img
                                className={classes.starIcon}
                                src={starIcon1}
                                alt="star icon"
                              />
                            </span>
                          </Typography>
                          <Typography variant="h6">
                            {value.hotel_rate}
                          </Typography>
                          <Grid item sm={12} container>
                            <Grid item xs>
                              <Typography gutterBottom variant="body2">
                                <span className={classes.amenetiesText}>
                                  <img
                                    className={classes.amenetiesIcon}
                                    src={poolIcon}
                                    alt="pool Icon"
                                  />{" "}
                                  Pool
                                </span>
                              </Typography>
                            </Grid>

                            <Grid item xs>
                              <Typography gutterBottom variant="body2">
                                <span className={classes.amenetiesText}>
                                  <img
                                    className={classes.amenetiesIcon}
                                    src={taxIcon}
                                    alt="pool Icon"
                                  />{" "}
                                  Free Parking
                                </span>
                              </Typography>
                            </Grid>
                          </Grid>

                          <Grid item sm={12} container>
                            <Grid item xs>
                              <Typography gutterBottom variant="body2">
                                <span className={classes.amenetiesText}>
                                  <img
                                    className={classes.amenetiesIcon}
                                    src={wifiIcon}
                                    alt="wifi Icon"
                                  />{" "}
                                  Free Wi-Fi
                                </span>
                              </Typography>
                            </Grid>
                            <Grid item xs>
                              <Typography gutterBottom variant="body2">
                                <span className={classes.amenetiesText}>
                                  <img
                                    className={classes.amenetiesIcon}
                                    src={cupIcon}
                                    alt="pool Icon"
                                  />{" "}
                                  Free Breakfast
                                </span>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">
                            {value.location} 
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" style={{color:'#FFA500',fontSize:'1.4rem'}}>
                          ${value.price}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item className={classes.image}>
                      <img
                        className={classes.img}
                        alt="hotels"
                        src={value.image}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </NavLink>
        ))}
        
      </div>  
      <div style={{position:'relative'}}>
        <Footer/>
      </div>
      </section>
      
    </>
  );
};

export default Accommadation;
