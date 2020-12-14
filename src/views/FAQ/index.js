import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import {useStyles} from '../../shared/styles/FaqStyles';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from '../../components/SearchBar';
import { Badge } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const FAQ = () => {
  const classes = useStyles();
  const HandleSearch = () => {
  // do some implementations
  }
  return (
    <Router>
      <Header />
      <div className={classes.faqContainer}>
        <div className={classes.searchContainer}>
          <Toolbar className={classes.toolbar}>
          <SearchBar HandleSearch={HandleSearch} prop={`Search Topic`}/>
          </Toolbar>
        </div>
        <div className={classes.questionContainer}>
          <div className={classes.leftDivider}>
            <div className={classes.contentContainer}>
                <Badge badgeContent={1} color="primary" classes={{badge: classes.badge}}/>
                <div className={classes.content}>
                  <Typography variant="h6" className={classes.title}>Accomodation booking</Typography>
                  <Typography className={classes.body}>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <Link to="/faq/more" className={classes.links}>More</Link>
                </div>
            </div>
            <div>
              <Badge badgeContent={2} color="primary" classes={{badge: classes.badge}}/>
              <div className={classes.content}>
                <Typography variant="h6" className={classes.title}>Loging in Account</Typography>
                <Typography className={classes.body}>
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Link to="/faq/more" className={classes.links}>More</Link>
              </div>
            </div>
          </div>
          <div className={classes.leftDivider}>
            <div className={classes.contentContainer}>
              <Badge badgeContent={3} color="primary" classes={{badge: classes.badge}}/>
              <div className={classes.content}>
                <Typography variant="h6" className={classes.title}>Asking questions</Typography>
                <Typography variant="body1" className={classes.body}>
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Link to="/faq/more" className={classes.links}>More</Link>
              </div>
            </div>
            <div>
              <Badge badgeContent={4} color="primary" classes={{badge: classes.badge}}/>
              <div className={classes.content}>
                <Typography variant="h6" className={classes.title}>Creating an Account</Typography>
                <Typography className={classes.body}>
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Link to="/faq/more" className={classes.links}>More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default FAQ;