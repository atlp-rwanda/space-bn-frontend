import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Header from './views/Header';
import Footer from './views/Footer/index';

import './App.css';
import Signup from './views/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;