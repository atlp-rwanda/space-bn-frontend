import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Home from './views/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup';
import './App.css';

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