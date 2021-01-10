import React, { useState, useContext } from "react";
import Footer from "../../components/Footer/index";
import Header from "../../components/Header/index";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../shared/styles/RoomsStyles";
import roomImg1 from "../../assets/images/room-img-1.jpeg";
import roomImg2 from "../../assets/images/room-img-2.jpeg";
import roomImg3 from "../../assets/images/room-img-3.jpeg";
import roomImg4 from "../../assets/images/room-img-4.jpeg";
import GroupedButtons from "../../components/GroupButton";
import HeadImg from "../../components/HeadImg";
import Room from "./Room";
import {RequestContext} from '../../contexts/RequestContext';

const Rooms = () => {
  const classes = useStyles();
  const {optionChangeCheckin,optionChangeCheckout} = useContext(RequestContext);
  const roomArray = [
    {
      id: 1,
      name: "Room #1",
      checkIn: "2020-12-11",
      checkOut: "2020-12-21",
      size:'single',
      price:'300',
      images: [roomImg1, roomImg2, roomImg3, roomImg4],
    },
    {
      id: 2,
      name: "Room #2",
      checkIn: "2020/12/11",
      checkOut: "2020/12/14",
      size:'king room',
      price:'200',
      images: [roomImg2, roomImg3, roomImg4, roomImg1],
    },
    {
      id: 3,
      name: "Room #3",
      checkIn: "2020/12/11",
      checkOut: "2021/01/14",
      size:'high class',
      price:'400',
      images: [roomImg3, roomImg4, roomImg2, roomImg1],
    },
    {
      id: 4,
      name: "Room #4",
      checkIn: "2019/12/11",
      checkOut: "2019/12/14",
      size:'double',
      price:'100',
      images: [roomImg1, roomImg2, roomImg3, roomImg4],
    },
    {
      id: 5,
      name: "Room #5",
      checkIn: "2021/12/06",
      checkOut: "2021/12/14",
      size:'low class',
      price:'300',
      images: [roomImg2, roomImg4, roomImg3, roomImg1],
    },
  ];

  const [rooms] = useState(roomArray);

  const [state, setState] = useState({
    check_In: "",
    check_Out: "",
    guest: "",
  });

  const [filterRooms, setFilterRooms] = useState(rooms);
  
  const handleCheckInDate = (e) => {
    setState({
      ...state,
      check_In: e.target.value,
    });
    optionChangeCheckin(e.target.value)
    
    const filtersRoom = rooms.filter((room) => {
      const a = new Date(e.target.value);
      const b = new Date(room.checkOut);
      console.log(a,b,"***********");
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
          <div>
            <GroupedButtons />
          </div>
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
