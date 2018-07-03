import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import MainSearch from "./pages/MainSearch";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
      <Router>
        <div>
        <Nav />
          <Switch>
            <Route exact path="/" component={MainSearch} />
          </Switch>
        <Footer/>
        </div>
      </Router>
  
    );

export default App;
