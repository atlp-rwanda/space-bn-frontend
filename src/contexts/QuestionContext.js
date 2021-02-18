import React, { useState, createContext } from 'react';

export const QuestionContext = createContext();

export const QuestionContextProvider = ({children}) => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState([]);
  
  return (
    <QuestionContext.Provider value={{ questions, setQuestions, selectedQuestion, setSelectedQuestion }}>
      {children}
    </QuestionContext.Provider>
  )
}
