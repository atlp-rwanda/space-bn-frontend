import React, { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import {useStyles} from '../../shared/styles/moreFAQStyles';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import config from '../../config/config';
import toaster from '../../helpers/toasts';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { useTranslation } from "react-i18next";
import { QuestionContext } from '../../contexts/QuestionContext';
import { formatTime } from '../../helpers/timeFormatter';

const { REACT_APP_BACKEND_URL } = config;

const MoreFAQ = () => {
  const classes = useStyles();
  const { selectedQuestion, setSelectedQuestion } = useContext(QuestionContext);
  const { id } = useParams();
  const { t } = useTranslation();
  const validTime = selectedQuestion.createdAt === undefined;
  
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BACKEND_URL}/questions/${id}`);

        setSelectedQuestion(response.data.existingQuestion);
      } catch (error) {
        toaster(t(error, 'Internal server error'));
      }
    };
    
    getQuestions();
  }, [id, setSelectedQuestion, t])

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
          <Paper className={classes.paper}>
              <div key={selectedQuestion.id} className={classes.content}>
                <Typography variant="h6" className={classes.title}>
                  {selectedQuestion.subject}
                </Typography>
                <Typography className={classes.body}>
                  {selectedQuestion.message}
                </Typography>
                <Typography className={classes.body}>
                  {t('Asked by')} <span className={classes.infos}>{selectedQuestion.name}</span> {t('on')} <span className={classes.infos}>{validTime ? '' : formatTime(selectedQuestion.createdAt)}</span> 
                </Typography>
              </div>
              <div>
                <Typography variant="h6"  className={classes.related}>
                  {t('Related Questions')} <br />
                <Link to='/faq' className={classes.links}>{t('Read Frequently Asked Questions')}</Link>
                </Typography>
              </div>
          </Paper>
        </div>
      <Footer />
    </>
  )
}

export default MoreFAQ;
