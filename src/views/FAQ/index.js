import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import {useStyles} from '../../shared/styles/FaqStyles';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from '../../components/SeachBar';
import { Badge } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import config from '../../config/config';
import toaster from '../../helpers/toasts';
import { QuestionContext } from '../../contexts/questionContext';

const { REACT_APP_BACKEND_URL } = config;

const FAQ = () => {
  const classes = useStyles();
  const { questions, setQuestions } = useContext(QuestionContext);
  
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BACKEND_URL}/questions`);
        
        setQuestions(response.data.allQuestions);
      } catch (error) {
        toaster(error, 'Internal server error');
      }
    };
    
    getQuestions();
  }, [setQuestions])
  
  const HandleSearch = () => {
  // do some implementations
}
  return (
    <>
      <Header />
        <div className={classes.faqContainer}>
          <div className={classes.searchContainer}>
            <Toolbar className={classes.toolbar}>
            <SearchBar HandleSearch={HandleSearch} prop={`search topic`}/>
            </Toolbar>
          </div>
          <div className={classes.questionContainer}>
            <div className={classes.leftDivider}>
              <div className={classes.contentContainer}>
                {questions.map((question, index) => (
                  <div key={question.id} className={classes.content} style={{ display: (index + 1)%2 !== 0 ? 'block' : 'none' }}>
                    <Badge badgeContent={index + 1} color="primary" classes={{badge: classes.badge}}/>
                    <Typography variant="h6" className={classes.title}>{question.subject}</Typography>
                    <Typography className={classes.body}>
                      {question.message.slice(0, 180) + '...'}
                    </Typography>
                    <Link to="/faq/more" className={classes.links}>More</Link>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.leftDivider}>
              <div className={classes.contentContainer}>
                {questions.map((question, index) => (
                  <div key={question.id} className={classes.content} style={{ display: (index + 1)%2 === 0 ? 'block' : 'none' }}>
                    <Badge badgeContent={index + 1} color="primary" classes={{badge: classes.badge}}/>
                    <Typography variant="h6" className={classes.title}>{question.subject}</Typography>
                    <Typography variant="body1" className={classes.body}>
                      {question.message.slice(0, 180) + '...'}
                    </Typography>
                    <Link to="/faq/more" className={classes.links}>More</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default FAQ;
