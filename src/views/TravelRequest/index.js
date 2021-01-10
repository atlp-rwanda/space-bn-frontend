import React, {useContext} from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import useStyles from "../../shared/styles/travelrequest";
import BackImg from "../../assets/images/back2.png";
import { Link } from "react-router-dom";
import toaster from "../../helpers/toasts";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { useHistory } from "react-router-dom";
import {RequestContext} from "../../contexts/RequestContext";

const TravelRequest = () => {
  const classes = useStyles();
  const history = useHistory();
  const {checkin, checkout, roomName,roomPrice, guest,roomType} = useContext(RequestContext)
  const submitrequest = () => {
    toaster("Travel request successful", "success");
    
    setTimeout(() => {
      history.push("/booking");
    }, 4000);
  };
  return (
    <>
      <Header />
      <ToastContainer
        draggable={true}
        transition={Zoom}
        autoClose={3000}
        position={toast.POSITION.TOP_CENTER}
      />
      <div className={classes.mainContainer}>
        <img className={classes.backImage} src={BackImg} alt="back imag" />
        <Typography
          variant="body1"
          style={{
            fontWeight: "700",
            fontSize: "2rem",
            top: "7rem",
            position: "relative",
            textAlign: "center",
          }}
        >
          Travel request
        </Typography>
        <div className={classes.root}>
          <Card>
            <CardHeader className={classes.cardHeader}>
              <Typography
                gutterBottom
                variant="body1"
                style={{ fontWeight: "700", marginBottom: "0" }}
              >
                Reservation Summary
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body1" className={classes.fontWeight}>
                Check in:
              </Typography>
              <Typography gutterBottom variant="body2">
                {new Date(checkin).toDateString()} 
              </Typography>

              <Typography variant="body1" className={classes.fontWeight}>
                Check out:
              </Typography>
              <Typography gutterBottom variant="body2">
                { new Date(checkout).toDateString() }
              </Typography>
              <Divider light />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "1rem 0",
                }}
              >
                <Typography variant="body1" className={classes.fontWeight} style={{fontSize:'1.2rem'}}>
                  Rooms Information
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>

              <Typography gutterBottom variant="body1" >
                Room Name : 
              </Typography>
              <Typography gutterBottom variant="body1">
               {roomName}
              </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>

              <Typography gutterBottom variant="body1" >
                Guest Number : 
              </Typography>
              <Typography gutterBottom variant="body1">
                {guest}
              </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>

              <Typography gutterBottom variant="body1" >
                Room Type : 
              </Typography>
              <Typography gutterBottom variant="body1">
               {roomType}
              </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1" >
                  Room charge
                </Typography>
                <Typography gutterBottom variant="body1">
                  ${roomPrice}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1" className={classes.fontWeight}>
                  Total charge
                </Typography>
                <Typography className={classes.fontWeight} variant="body1">${roomPrice * guest}</Typography>
              </div>
            </CardContent>
          </Card>
          <div className={classes.Btn}>
            <Link to='/0/rooms' style={{ textDecoration: "none" }}>
              <Button
                size="small"
                variant="contained"
                className={classes.editBtn}
                
              >
                Edit
              </Button>
            </Link>

            <Button
              size="small"
              data-testid="submit"
              variant="contained"
              className={classes.submitBtn}
              onClick={submitrequest}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TravelRequest;
