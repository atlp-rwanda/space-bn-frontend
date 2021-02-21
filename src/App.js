import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login/Login'; 
import Signup from './views/Signup';
import Hotel from './views/Hotel';
import FAQ from './views/FAQ/index';
import MoreFAQ from './views/FAQ/moreFAQ';
import DeleteFAQ from './views/FAQ/deleteFAQ';
import Contact from './views/Contact';
import About from './views/Aboutus/About';
import './App.css';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import ProtectedRoute from './helpers/protected.route';
import Sidebar from './components/Sidebar/Sidebar';
import RequestThread from './views/RequestThread/RequestThread';
import Accommadation from "./views/Accommadation";
import Rooms from "./views/Rooms";
import RoomDetail from "./views/Room_detail";
import TravelRequest from "./views/TravelRequest";
import { RequestProvider } from "./contexts/RequestContext";
import FacilityContainer from "./views/facilities/dashBoardContainer";
import SignupContextProvider from './contexts/SignupContext';
import profileDetailsView from "./views/profileDetailsView";
import NotificationProvider from './contexts/NotificationContext';
import { QuestionContextProvider } from './contexts/QuestionContext';
import PasswordReset from './views/PasswordReset';

function App() {
  return (
    <SignupContextProvider>
      <NotificationProvider>
        <QuestionContextProvider>
          <Router>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/hotel" component={Hotel}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route path="/sidebar" component={Sidebar} />
                <Route exact path="/faq" component={FAQ}/>
                <Route exact path="/faq/:id/more" component={MoreFAQ}/>
                <Route exact path="/users/resetpassword" component={PasswordReset}/>
                <ProtectedRoute exact path="/deletefaq" component={DeleteFAQ}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/profileview" component={profileDetailsView}/>
                <ProtectedRoute exact path="/profile" component={Profile} />
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
                <ProtectedRoute exact path="/requests/:reqId">
                  <RequestProvider>
                    <TravelRequest />
                  </RequestProvider>
                </ProtectedRoute>
                <ProtectedRoute exact path="/facilities" component={FacilityContainer} /> 
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute path="/requests/thread" exact component={RequestThread} />
              </Switch>
            </div>
          </Router>
        </QuestionContextProvider>
      </NotificationProvider>
    </SignupContextProvider>
  );
}

export default App;
