import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import MainSearch from "./pages/MainSearch";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import "./App.css";
import {Provider} from "react-redux";

//Import store for application state
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser} from "./actions/authActions";

if(localStorage.jwtToken) {
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  console.log(decoded)
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
              <Nav/>
                <Route exact path="/" component={MainSearch}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/social" component={SocialPage} />
              <Footer/>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}
export default App;
