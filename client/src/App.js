import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import MainSearch from "./pages/MainSearch";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import "./App.css";
import {Provider} from "react-redux"; //provides store, which holds state
import store from "./store"; //Import store
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser} from "./actions/authActions"

//check for token
if(localStorage.jwtToken) {
  //set auth toekn header auth
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded))
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App Site"> 
          <div className="App-header">
            <Nav />
          </div>
          <div className="main">
          <Switch>
              <Route exact path="/" component={MainSearch} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Register" component={Register} />
            </Switch>
          </div>
        <Footer/>
      </div>
      </Router>
    </Provider>
    );
  }
}

export default App;