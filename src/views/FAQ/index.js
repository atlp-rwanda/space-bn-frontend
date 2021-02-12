import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
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
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { QuestionContext } from '../../contexts/QuestionContext';
import { useTranslation } from "react-i18next";

const { REACT_APP_BACKEND_URL } = config;

const FAQ = () => {
  const classes = useStyles();
  const { questions, setQuestions } = useContext(QuestionContext);
  const { t } = useTranslation();
  const currentLng = localStorage.getItem('i18nextLng');
  
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BACKEND_URL}/questions`, {
          method:'get',
          headers:{
            "Content-Type":"Application/json",
            "Accept-Language": currentLng
          }
        });
        
        setQuestions(response.data.allQuestions);
      } catch (error) {
        toaster(error, 'Internal server error');
      }
    };
    
    getQuestions();
  }, [setQuestions, currentLng])
  
  let history = useHistory();
  const handleQuestionSelect = (id) => {
    history.push(`/faq/${id}/more`);
  }
  const HandleSearch = () => {
  // do some implementations
}
  return (
    <>
    <ToastContainer 
        draggable={true}
        transition={Zoom}
        autoClose={3000}
        position={toast.POSITION.TOP_CENTER}
    />
      <Header />
        <div className={classes.faqContainer}>
          <div className={classes.searchContainer}>
            <Toolbar className={classes.toolbar}>
            <SearchBar HandleSearch={HandleSearch} prop={`${t('Search Topic')}`}/>
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
                    <span
                      onClick={() => handleQuestionSelect(question.id)}
                      className={classes.links}
                    >
                      {t('More')}
                    </span>
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
                    <span
                      onClick={() => handleQuestionSelect(question.id)}
                      className={classes.links}
                    >
                      {t('More')}
                    </span>
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
