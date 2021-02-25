/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import PaperCard from "../../components/PaperCard";
import SearchBar from "../../components/SeachBar";
import Scroll from "../../components/Scroll";
import MapLocation from "../../components/Map";
import Footer from "../../components/Footer";
import toaster from "../../helpers/toasts";
import Axios from "axios";
import config from '../../config/config';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { useTranslation } from "react-i18next";
import AuthHeader from "../../components/Header/authHeader";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";

const { REACT_APP_BACKEND_URL } = config;

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
    marginTop: '-70px',
    marginBottom: "1vh",
    "@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)": {
      height: "100vh",
    },
  },
}));

const Hotel = () => {
  const classes = useStyles();
  const [hotels, sethotels] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [activePopup, setActivePopup] = useState(false);
  const [hotelPosition, setHotelPosition] = useState(null);
  const [activeHotel, setActiveHotel] = useState(null);
  const { t } = useTranslation();
  const currentLng = localStorage.getItem('i18nextLng');

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
     //get all hotels
    const getHotels = async () => {
      try {
        const response = await Axios.get(`${REACT_APP_BACKEND_URL}/hotels`, {
          method:'get',
          headers:{
            "Content-Type":"Application/json",
            "Accept-Language": currentLng
          }
        });
        
        sethotels(response.data.hotels);
        setSearchValue(response.data.hotels);
      } catch (error) {
        toaster(error, 'Internal server error');
      }
    };
    
    getHotels();
  }, [sethotels]);

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
      if (value.hotelname.toLowerCase().includes(typedValue.toLowerCase().trim())) {
        return true;
      } else {
        return false;
      }
    });
    setSearchValue(filttered);
  };

  return (
    <DashboardLayout>
    <ToastContainer 
        draggable={true}
        transition={Zoom}
        autoClose={3000}
        position={toast.POSITION.TOP_CENTER}
    />
    {/* <div>Hello</div> */}
      <div
        className={classes.container}
        // style={{ marginTop: '10px' }}
      >
        <div
          className={classes.root}
        >
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
      </div>
    </DashboardLayout>
  );
};

export default Hotel;
