import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import MainSearch from "./pages/MainSearch";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CommentsPage from "./pages/Comments";
//import Footer from "./components/Footer";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute"
import SocialPage from "./pages/SocialPage";
import NoMatch from "./pages/NoMatch";
import "./App.css";
import {Provider} from "react-redux";

//Import store for application state
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser, logoutUser} from "./actions/authActions";

if(localStorage.jwtToken) {
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  //Check for expired token
  const currentTime = Date.now() / 1000
  if(decoded.exp < currentTime) {
    //Logout User
    store.dispatch(logoutUser())
    //window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <div className="Site">
              <div className="Site-content">
              <Nav/>
                <Switch>
                  <Route exact path="/" component={MainSearch}/>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/register" component={Register}/>
                  <PrivateRoute exact path="/social" component={SocialPage}/>
                  <PrivateRoute exact path="/comments/:id" component={CommentsPage}/>
                  <Route component={NoMatch}/>
                </Switch>
                </div>
                <div className="Site-content:after">
              <Footer/>
                </div>
              </div>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}
export default App;
