import React, { useEffect, useState} from "react";
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
import toaster from "../../helpers/toasts";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { formatTime } from '../../helpers/timeFormatter';
import { useTranslation } from "react-i18next";


const { REACT_APP_BACKEND_URL } = process.env;

const TravelRequest = () => {
  const classes = useStyles();
  const history = useHistory();
  const [requestData, setRequestData] = useState({});
  const { t } = useTranslation();

  const submitrequest = () => {
    toaster(t("Travel request submitted successfully"), "success");
    
    setTimeout(() => {
      history.push("/booking");
    }, 4000);
  };
  const handleEdit = () => {
    setTimeout(() => {
      history.push("/0/rooms")
    })
  }
  const invalidTime = requestData.dateStart === undefined;
  const { pathname } = window.location;
  const requestId = pathname.split('/')[2];

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    const currentLng = localStorage.getItem('i18nextLng');
    Axios.get(`${REACT_APP_BACKEND_URL}/requests/${requestId}`, {
      headers: {
        'authorization': token,
        "Accept-Language": currentLng
      }
    })
    .then((res) => setRequestData(res.data.displayRequest))
    .catch((err) => {
      toaster(err.message, 'error')
    })
  },[requestId])
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
          {t('Travel request')}
        </Typography>
        <div className={classes.root}>
          <Card>
            <CardHeader className={classes.cardHeader}>
              <Typography
                gutterBottom
                variant="body1"
                style={{ fontWeight: "700", marginBottom: "0" }}
              >
                {t('Travel Request Summary')}
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="body1" className={classes.fontWeight}>
                {t('Check in')}:
              </Typography>
              <Typography gutterBottom variant="body2">
                {invalidTime ? '' : formatTime(requestData.dateStart)} 
              </Typography>
              <Typography variant="body1" className={classes.fontWeight}>
                {t('Check out')}:
              </Typography>
              <Typography gutterBottom variant="body2">
                {invalidTime ? '' : formatTime((requestData.dateEnd))}
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
                  {t('Request Information')}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography gutterBottom variant="body1" >
                {t('Room ID')} : 
              </Typography>
              <Typography gutterBottom variant="body1">
               {requestData.idRoom}
              </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography gutterBottom variant="body1" >
                {t('Requester Name')} : 
              </Typography>
              <Typography gutterBottom variant="body1">
                {requestData.requesterName}
              </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography gutterBottom variant="body1" >
                {t('Room Type')} : 
              </Typography>
              <Typography gutterBottom variant="body1">
               {requestData.roomType}
              </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1" >
                  {t('Hotel Name')}
                </Typography>
                <Typography gutterBottom variant="body1">
                  {requestData.hotelName}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body1" className={classes.fontWeight}>
                  {t('Request Status')}
                </Typography>
                <Typography className={classes.fontWeight} variant="body1">{requestData.requestStatus}</Typography>
              </div>
            </CardContent>
          </Card>
          <div className={classes.Btn}>
            <Button
              size="small"
              variant="contained"
              className={classes.editBtn}
              onClick={handleEdit}
              disabled={requestData.requestStatus !== 'PENDING'}
            >
              {t('Edit')}
            </Button>
            <Button
              size="small"
              data-testid="submit"
              variant="contained"
              className={classes.submitBtn}
              onClick={submitrequest}
              disabled={requestData.requestStatus !== 'PENDING'}
            >
              {t('Submit')}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TravelRequest;
