import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login/Login'; 
import Signup from './views/Signup';
import Hotel from './views/Hotel';
import FAQ from './views/FAQ';
import About from './views/About';
import Contact from './views/Contact';
import './App.css';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import ProtectedRoute from './helpers/protected.route';
import Accommadation from "./views/Accommadation";
import Rooms from "./views/Rooms";
import RoomDetail from "./views/Room_detail";
import TravelRequest from "./views/TravelRequest";
import { RequestProvider } from "./contexts/RequestContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hotel" component={Hotel} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/booking" component={Accommadation} />
          <ProtectedRoute exact path="/:hotelId/rooms">
            <RequestProvider>
              <Rooms />
            </RequestProvider>
          </ProtectedRoute>

          <ProtectedRoute exact path="/:hotelId/rooms/:roomId">
            <RequestProvider>
              <RoomDetail />
            </RequestProvider>
          </ProtectedRoute>
          <ProtectedRoute exact path="/request">
            <RequestProvider>
              <TravelRequest />
            </RequestProvider>
          </ProtectedRoute>
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
