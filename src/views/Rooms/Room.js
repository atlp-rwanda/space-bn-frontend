import React, { useState, useEffect , useContext} from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../shared/styles/RoomsStyles";
import {RequestContext} from '../../contexts/RequestContext';
import {
  Wifi,
  FreeBreakfast,
  Pool,
  LocalParking,
  Star,
} from "@material-ui/icons";
const Room = (props) => {
  const classes = useStyles();
  const [image, setImage] = useState("");
  useEffect(() => {
    if (props.images[0]) setImage(props.images[0]);
  }, [props.images]);
  const handleImageChange = (e) => {
    setImage(e.target.src);
  };
  const {roomChangeData} = useContext(RequestContext);

  return (
    <Grid container spacing={2} style={{bottom:0,}}>
      <Grid item xs={12}>
        <Card className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6} className={classes.image}>
                  <img className={classes.img} src={image} alt="room1" />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <Grid container spacing={1} >
                  {props.images && props.images.map((img) => (
                      <Grid item xs={12} sm={6}  key={img}>
                        <img
                          className={classes.imge}
                          src={img}
                          alt="room1"
                          onClick={handleImageChange}
                          data-testid="image1"
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        variant="h6"
                        style={{color:'rgba(0, 0, 0, 0.87)', fontSize:'1.2rem', fontFamily: "'Poppins', sans-serif",fontWeight:'700'}}
                      >
                        {props.name}
                      </Typography>
                      <Typography
                        variant="body2"
                      >
                        Lorem ipsum is simply text Lorem ipsum is simply text
                      </Typography>
                      <Link
                        to={`/${props.id}/rooms/${props.id}`}
                        variant="h6"
                        color="textSecondary"
                        data-testid="btn"
                        style={{ color: "#00000f",fontWeight:'normal' }}
                        onClick= {() =>roomChangeData(
                          { name: props.name,
                            price: props.price,
                            type: props.size
                          }
                        )}
                      >

                        More information
                      </Link>
                    </Grid>
                    <Grid
                      item
                      xs
                      className={classes.Icons}
                      style={{ paddingTop: "0", paddingBottom: "0" }}
                    >
                      <Wifi style={{ width: 20, height: 15 }} />
                      <FreeBreakfast style={{ width: 20, height: 15 }} />
                      <Pool style={{ width: 20, height: 15 }} />
                      <LocalParking style={{ width: 20, height: 15 }} />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" style={{color:'#FFA500', fontSize:'1.2rem'}}>${props.price}</Typography>
                  </Grid>
                </Grid>
                <Grid item className={classes.inline}>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <Star
                        style={{
                          width: 20,
                          height: 15,
                          color: "#ff0000",
                        }}
                      />{" "}
                      {props.size}
                    </span>
                  </Typography>
                  <Link to={`/requests/${props.id}`} style={{ textDecoration: "none" }}>
                    <Button
                      size="small"
                      className={classes.bookBtn}
                      variant="contained"
                      color="primary"
                      data-testid="btnclick"
                      onClick={()=>roomChangeData(
                        { name: props.name,
                          price: props.price,
                          type: props.size
                        }
                      )}
                    >
                      Book
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};


export default Room;