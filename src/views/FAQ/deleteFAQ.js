import React, { useEffect, useContext } from 'react';
import {useStyles} from '../../shared/styles/FaqStyles';
import { Badge, FormControl, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import config from '../../config/config';
import toaster from '../../helpers/toasts';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { QuestionContext } from '../../contexts/QuestionContext';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import { formatTime } from '../../helpers/timeFormatter';
import { useTranslation } from "react-i18next";

const { REACT_APP_BACKEND_URL } = config;

const DeleteFAQ = () => {
  const classes = useStyles();
  const { questions, setQuestions } = useContext(QuestionContext);
  const { t } = useTranslation();
  const currentLng = localStorage.getItem('i18nextLng');
  
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BACKEND_URL}/questions`);
        
        setQuestions(response.data.allQuestions);
      } catch (error) {
        toaster(error, t('Internal server error'));
      }
    };
    
    getQuestions();
  }, [setQuestions, t])
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${REACT_APP_BACKEND_URL}/questions/${id}`, {
        method:'post',
        headers: {
          "Content-Type":"Application/json",
          "Accept-Language": currentLng,
          'authorization': localStorage.getItem('userToken')
        }
      });
      
      setQuestions(questions.filter((question) => question.id !== id));
      
      toaster(t('Question deleted successfully!'), 'success');
    } catch (error) { 
      toaster(t('Internal server error'), 'error');
    }
  }
  return (
    <DashboardLayout>
      <ToastContainer 
          draggable={true}
          transition={Zoom}
          autoClose={3000}
          position={toast.POSITION.TOP_CENTER}
      />
          <div className={classes.faqContainer}>
            <div className={classes.searchContainer}>
                <Typography variant="h6" className={classes.title} style={{ textAlign: 'center' }}>
                  {t('Frequently Asked Questions')}
                </Typography>
            </div>
            <div className={classes.questionContainer}>
              <div className={classes.leftDivider}>
                <div className={classes.contentContainer}>
                  {questions.map((question, index) => (
                    <div key={question.id} className={classes.content} style={{ display: (index + 1)%2 !== 0 ? 'block' : 'none' }}>
                      <Badge badgeContent={index + 1} color="primary" classes={{badge: classes.badge}}/>
                      <Typography variant="h6" className={classes.title}>{question.subject}</Typography>
                      <Typography className={classes.body}>
                        {question.message.slice(0, 250) + '...'}
                      </Typography>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '96%' }}>
                        <Typography className={classes.body} style={{ margin: '20px 0 0 10px' }}>
                          {t("Asked by")} <span className={classes.infos}  style={{ color: '#127CDD' }}>{question.name}</span> {t('on')} <span className={classes.infos}>{formatTime(question.createdAt)}</span> 
                        </Typography>
                        <FormControl  className={classes.root} variant="outlined" style={{ margin: '20px 0 0 10px' }}>
                            <Button variant="contained" color="secondary" className={classes.action} 
                              onClick={() => handleDelete(question.id)}
                            >
                              {t('Delete')}
                            </Button>
                        </FormControl>
                      </div>
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
                        {question.message.slice(0, 250) + '...'}
                      </Typography>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '96%' }}>
                        <Typography className={classes.body} style={{ margin: '20px 0 0 10px' }}>
                        {t("Asked by")} <span className={classes.infos}  style={{ color: '#127CDD' }}>{question.name}</span> {t('on')} <span className={classes.infos}>{formatTime(question.createdAt)}</span> 
                        </Typography>
                        <FormControl  className={classes.root} variant="outlined" style={{ margin: '20px 0 0 10px' }}>
                            <Button variant="contained" color="secondary" className={classes.action} 
                              onClick={() => handleDelete(question.id)}
                            >
                              {t('Delete')}
                            </Button>
                        </FormControl>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
    </DashboardLayout>
  )
}

export default DeleteFAQ;
