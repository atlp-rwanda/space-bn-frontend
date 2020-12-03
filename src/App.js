import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
