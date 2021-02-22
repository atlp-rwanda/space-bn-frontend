import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login/Login'; 
import Signup from './views/Signup';
import Hotel from './views/Hotel/index';
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
import UserRole from "./views/UserRole";
import FacilityContainer from "./views/facilities/dashBoardContainer";
import SignupContextProvider from "./contexts/SignupContext";
import profileDetailsView from "./views/profileDetailsView";
import AddProfilePicture from "./views/profileDetailsView/AddProfilePicture";
import NotificationProvider from './contexts/NotificationContext';
import { QuestionContextProvider } from './contexts/QuestionContext';
import PasswordReset from './views/PasswordReset';
import EmailConfirmation from './views/confirmEmail';
import AdminHotels from './views/Hotel/AdminHotels';
import AddHotel from './views/Hotel/AddHotel';
import AddFacility from "./views/facilities/AddFacility";

function App() {
  return (
    <SignupContextProvider>
      <NotificationProvider>
        <QuestionContextProvider>
          <Router>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/hotel" component={Hotel} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route path="/sidebar" component={Sidebar} />
                <Route exact path="/faq" component={FAQ} />
                <Route exact path="/faq/:id/more" component={MoreFAQ} />
                <Route
                  exact
                  path="/users/resetpassword"
                  component={PasswordReset}
                />
                <ProtectedRoute exact path="/deletefaq" component={DeleteFAQ} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route
                  exact
                  path="/profileview"
                  component={profileDetailsView}
                />
                <ProtectedRoute exact path="/userrole" component={UserRole} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <ProtectedRoute
                  exact
                  path="/booking"
                  component={Accommadation}
                />
                <ProtectedRoute
                  exact
                  path="/:hotelId/rooms"
                  component={Rooms}
                />
                <ProtectedRoute
                  exact
                  path="/:hotelId/rooms/:roomId"
                  component={RoomDetail}
                />
                <ProtectedRoute
                  exact
                  path="/room/:reqId"
                  component={TravelRequest}
                />
                <ProtectedRoute
                  exact
                  path="/requests/:reqId"
                  component={TravelRequest}
                />
                <ProtectedRoute
                  exact
                  path="/facilities"
                  component={FacilityContainer}
                />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute path="/requests/thread" exact component={RequestThread} />
                <Route path="/confirm-email" component={EmailConfirmation}/>
                <ProtectedRoute exact path="/hotels" component={AdminHotels} />
                <ProtectedRoute exact path="/addhotel" component={AddHotel} />
                <ProtectedRoute exact path="/addfacility" component={AddFacility} />
                <Route exact path="/addprofilepicture" component={AddProfilePicture} />
              </Switch>
            </div>
          </Router>
        </QuestionContextProvider>
      </NotificationProvider>
    </SignupContextProvider>
  );
}

export default App;
