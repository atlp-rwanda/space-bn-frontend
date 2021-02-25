import React, { useState, useContext } from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Paper from "@material-ui/core/Paper";
import HeadImg from "../../components/HeadImg";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../shared/styles/Room_detailStyles";
import { SubMap } from "../../components/Map";
import { RequestContext } from "../../contexts/RequestContext";

import {
  Wifi,
  FreeBreakfast,
  Pool,
  LocalParking,
  Star,
} from "@material-ui/icons";

const RoomsDetail = (props) => {
  const classes = useStyles();
  const {
    checkin,
    checkout,
    roomName,
    roomPrice,
    guest,
    roomType,
    roomChangeData,
    images,
    description,
    
  } = useContext(RequestContext);
  const [image, setImage] = useState(images[0] || '');
  const [room] = useState({
        roomType,
        description,
        roomName,
        roomPrice,
        images,
        guest,
        
  })



  const imageArray = images;
  const handleImageChange = (e) => {
    setImage(e.target.src);
  };

  return (
    <>
      <Header />
      <div>
        <div className={classes.root1}>
          <HeadImg />
        </div>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={12} className={classes.image}>
                        <img className={classes.img} src={image} alt="room1" />
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Grid container spacing={1}>
                        {imageArray.map((img) => (
                          <Grid item xs key={img}>
                            <img
                              className={classes.imge}
                              src={img}
                              alt="room1"
                              onClick={handleImageChange}
                              data-testid="image"
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="body1"
                              style={{
                                fontWeight: "700",
                                color: "#000000",
                                fontSize: "1.4rem",
                                textAlign: "center",
                              }}
                            >
                              {room.roomName}
                            </Typography>

                            <Typography
                              variant="body1"
                              style={{
                                borderBottom: 1,
                                textAlign: "center",
                                fontSize: "1.2rem",
                              }}
                            >
                              Description
                            </Typography>
                            <Typography variant="body2">
                              {room.description}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              variant="body1"
                              style={{
                                borderBottom: 1,
                                textAlign: "center",
                                fontSize: "1.2rem",
                              }}
                            >
                              Amenities
                            </Typography>

                            <Grid
                              container
                              spacing={2}
                              className={classes.amenitiesDiv}
                            >
                              <Grid item xs={6} className={classes.Icons}>
                                <br></br>
                                <span className={classes.amenities}>
                                  <Wifi style={{ width: 20, height: 15 }} />{" "}
                                  Free Wireless
                                </span>
                                <br></br>
                                <span className={classes.amenities}>
                                  <FreeBreakfast
                                    style={{ width: 20, height: 15 }}
                                  />{" "}
                                  Breakfast{" "}
                                </span>
                                <br></br>
                                <span className={classes.amenities}>
                                  <Pool style={{ width: 20, height: 15 }} />{" "}
                                  Swimming Pool
                                </span>
                                <br></br>
                                <span className={classes.amenities}>
                                  <LocalParking
                                    style={{ width: 20, height: 15 }}
                                  />
                                  Parking
                                </span>
                              </Grid>
                              <Grid item xs={6} className={classes.Icons}>
                                <br></br>
                                <Card
                                  style={{
                                    height: "8rem",
                                    cursor: "pointer",
                                  }}
                                >
                                  <SubMap />
                                </Card>
                                <Link to="/hotel">
                                  {" "}
                                  <Typography
                                    variant="body1"
                                    style={{ cursor: "pointer" }}
                                  >
                                    View map location
                                  </Typography>
                                </Link>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            style={{ color: "#FFA500", fontSize: "1.2rem" }}
                          >
                            ${room.roomPrice}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item className={classes.inline}>
                        <Typography
                          variant="body2"
                          style={{ cursor: "pointer" }}
                        >
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "1.2rem",
                            }}
                          >
                            <Star
                              style={{
                                width: 25,
                                height: 20,
                                color: "#ff0000",
                              }}
                            />{" "}
                            {room.roomType}
                          </span>
                        </Typography>
                        <Link to={`/requests/${props.match.params.roomId}`} style={{ textDecoration: "none" }}>
                        
                          <Button
                            size="small"
                            className={classes.bookBtn}
                            variant="contained"
                            color="primary"
                            data-testid="btn"
                            onClick={() =>
                              roomChangeData({
                                name: roomName,
                                type: roomType,
                                price: roomPrice,
                                checkin: checkin,
                                checkout: checkout,
                                hotel: 'Gorillas Hotel'
                              })
                            }
                          >
                            Book
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomsDetail;
