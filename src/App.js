import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup';
import Hotel from './views/Hotel';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import RequestThread from './views/RequestThread/RequestThread';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/requests/thread" exact component={RequestThread} />
          <Route exact path="/" component={Home}/>
          <Route exact path="/hotel" component={Hotel}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route path="/sidebar" component={Sidebar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;