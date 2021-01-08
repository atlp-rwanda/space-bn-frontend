import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login/Login'; 
import Signup from './views/Signup';
import Hotel from './views/Hotel';
import FAQ from './views/FAQ';
import About from './views/About';
import Contact from './views/Contact';
import Booking from './views/Booking';
import './App.css';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './helpers/protected.route';
import Sidebar from './components/Sidebar/Sidebar';
import RequestThread from './views/RequestThread/RequestThread';
import ProfileDummy from './views/ProfileDummy/ProfileDummy';
import FacilitiesDummy from './views/FacilitiesDummy/FacilitiesDummy';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/hotel" component={Hotel}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route path="/sidebar" component={Sidebar} />
          <Route exact path="/faq" component={FAQ}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/booking" component={Booking}/>
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route path="/requests/thread" exact component={RequestThread} />
          <Route path="/profile" exact component={ProfileDummy} />
          <Route path="/facilities" exact component={FacilitiesDummy} />

       </Switch>
      </div>
    </Router>
  );
}

export default App;