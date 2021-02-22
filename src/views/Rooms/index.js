import React, { useState, useContext, useEffect } from "react";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/index";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../shared/styles/RoomsStyles";
import HeadImg from "../../components/HeadImg";
import Room from "./Room";
import {RequestContext} from '../../contexts/RequestContext';
import axios from 'axios';


const Rooms = (props) => {
  const classes = useStyles();
  const {optionChangeCheckin,optionChangeCheckout} = useContext(RequestContext);
  
  const [rooms, setRooms] = useState([]);
  const [filterRooms, setFilterRooms] = useState(rooms);
  
  useEffect(() =>{
    const fetchRoom = async() => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/hotels/${props.match.params.hotelId}/rooms`);
      const fetchedRooms =
      res.data.rooms.map((room) => {
        return {
          ...room,
          id: room.id,
          name: room.roomLabel,
          price: room.price,
          description: room.description,
          images: room.roomImage,
          checkIn:room.Request ? room.Request.dateStart : "2019/02/22",
          checkOut:room.Request ? room.Request.dateEnd : "2019/02/22",
          size: room.roomType
        }
      })
      setRooms(fetchedRooms)
      setFilterRooms(fetchedRooms)
      return res.data.rooms;
    }
    fetchRoom();
  },[props.match])


  const [state, setState] = useState({
    check_In: "",
    check_Out: "",
    guest: "",
  });

 
  
  const handleCheckInDate = (e) => {
    setState({
      ...state,
      check_In: e.target.value,
    });
    optionChangeCheckin(e.target.value)
    
    const filtersRoom = rooms.filter((room) => {
      const a = new Date(e.target.value);
      const b = new Date(room.checkOut);
      if (a - b >= 1e3) {
        return true;
      }
      return false;
    });
    
    setFilterRooms(filtersRoom);
  };
  const handleCheckOutDate = (e) => {
    setState({
      ...state,
      check_Out: e.target.value,
    });
    optionChangeCheckout(e.target.value)
    
    const filtersRoom = filterRooms.filter((room) => {
      const a = new Date(e.target.value);
      const b = new Date(state.check_In);
      
      if (a - b >= 24 * 36e5) {
        return true;
      }
      return false;
    });

    setFilterRooms(filtersRoom);
  };
  let date = new Date();
  let today = date.toISOString().substr(0, 10);

  return (
    <>
      <Header />
      <HeadImg/>
      <div className={classes.root1}>
        <form className={classes.formField}>
          <TextField
            id="checkin"
            label="Check In"
            type="date"
            data-testid="check"
            defaultValue={today}
            onChange={handleCheckInDate}
            
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          
          <TextField
            id="checkout"
            label="Check Out"
            type="date"
            defaultValue={today}
            onChange={handleCheckOutDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          {/* <div>
            <GroupedButtons />
          </div> */}
        </form>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            {filterRooms.map((value, index) => (
              <Room key={index} {...value} />
            ))}
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Rooms;
