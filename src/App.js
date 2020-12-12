import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login/Login'; 
import Signup from './views/Signup';
import Hotel from './views/Hotel';
import FAQ from './views/FAQ';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/hotel" component={Hotel}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/faq" component={FAQ}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;