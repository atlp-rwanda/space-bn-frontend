import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import reportWebVitals from './reportWebVitals';
import { RequestProvider } from "./contexts/RequestContext";
import { debugContextDevtool } from "react-context-devtool";
import './i18n';

const container = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RequestProvider>
      <Suspense fallback="loading ....">
      <App />
    </Suspense>
    </RequestProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  container
  );
  
  reportWebVitals();
  if (window._REACT_CONTEXT_DEVTOOL) {
    debugContextDevtool(container);
  }
