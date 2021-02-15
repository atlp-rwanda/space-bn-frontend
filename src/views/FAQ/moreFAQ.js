import React, { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import {useStyles} from '../../shared/styles/moreFAQStyles';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from '../../components/SeachBar';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import config from '../../config/config';
import toaster from '../../helpers/toasts';
import { QuestionContext } from '../../contexts/questionContext';

const { REACT_APP_BACKEND_URL } = config;

const MoreFAQ = () => {
  const classes = useStyles();
  // const { questions, setQuestions } = useContext(QuestionContext);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getQuestions = async () => {
      try {
        // const response = await axios.get(`${REACT_APP_BACKEND_URL}/questions`);
        
        // setQuestions(response.data.allQuestions);
      } catch (error) {
        toaster(error, 'Internal server error');
      }
    };
    
    // getQuestions();
  }, [])

  return (
    <>
      <Header />
        <div className={classes.faqContainer}>
          <Paper className={classes.paper}>
          {/* <div className={classes.contentContainer}> */}
            {/* {questions.map((question, index) => ( */}
              <div className={classes.content}>
                <Typography variant="h6" className={classes.title}>
                  {/* {question.subject} */}
                  Different Statistics of Users
                </Typography>
                <Typography className={classes.body}>
                  {/* {question.message} */}
                  Nulla facilisi. Duis consequat, dolor ac fringilla posuere, sem purus bibendum est, sed tempor ante orci nec massa. In ac libero nec sem blandit consequat non nec ligula. Integer laoreet mattis augue sit amet lobortis. Donec odio lacus, facilisis sed mauris eget, sagittis luctus nunc. laoreet mattis augue sit amet lobortis. Donec odio lacus, facilisis sed mauris eget, sagittis luctus nunc.
                </Typography>
              </div>
            {/* ))} */}
          {/* </div> */}
          </Paper>
        </div>
      <Footer />
    </>
  )
}

export default MoreFAQ;
