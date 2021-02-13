import React, { useState, createContext } from 'react';

export const QuestionContext = createContext();

export const QuestionContextProvider = ({children}) => {
  const [questions, setQuestions] = useState([]);
  
  return (
    <QuestionContext.Provider value={{questions, setQuestions}}>
      {children}
    </QuestionContext.Provider>
  )
}
