/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import PaperCard from "../../components/PaperCard";
import SearchBar from "../../components/SeachBar";
import Scroll from "../../components/Scroll";
import MapLocation from "../../components/Map";
import { hotelInfo, concatHotelInfo } from "../../helpers/hotelInfo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const drawerWidth = 650;
const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    padding: theme.spacing(8, 0),
  },
  root: {
    width: drawerWidth,
    backgroundColor: "#F4F4F4",
    paddingBottom: "90x",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1vh",
    "@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)": {
      height: "100vh",
    },
  },
}));

const Hotel = () => {
  const classes = useStyles();
  const [hotels, sethotels] = useState(hotelInfo.concat(concatHotelInfo));
  const [searchValue, setSearchValue] = useState(hotels);
  const [activePopup, setActivePopup] = useState(false);
  const [hotelPosition, setHotelPosition] = useState(null);
  const [activeHotel, setActiveHotel] = useState(null);

  // track page we are currently on
  const [page, setPage] = useState(1);
  //add loader reference
  const loader = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    //initialize IntersectionObserver
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  useEffect(() => {
    //add more hotels
    const combinedHotels = hotelInfo.concat(concatHotelInfo);
    setSearchValue(combinedHotels);
  }, [page]);

  // update page on scroll
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };
  //handle search input
  const HandleSearch = (typedValue) => {
    const filttered = hotels.filter((value) => {
      if (value.name.toLowerCase().includes(typedValue.toLowerCase().trim())) {
        return true;
      } else {
        return false;
      }
    });
    setSearchValue(filttered);
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.root}>
          <div className={classes.drawerHeader} />
          <SearchBar
            HandleSearch={HandleSearch}
            value={""}
            prop={"Search hotel"}
          />
          <Scroll height={'83vh'}>
            <PaperCard
              searchValue={searchValue}
              activePopup={activePopup}
              setActivePopup={setActivePopup}
              setHotelPosition={setHotelPosition}
              setActiveHotel={setActiveHotel}
            />
          </Scroll>
        </div>
        <MapLocation
          activePopup={activePopup}
          hotelPosition={hotelPosition}
          activeHotel={activeHotel}
          searchValue={searchValue}
        />
      </div>
      <div style={{ marginTop: "3vh" }}>
        <Footer />
      </div>
    </>
  );
};

export default Hotel;
