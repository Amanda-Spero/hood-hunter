import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import MainSearch from "./pages/MainSearch";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App Site"> 
      <div className="App-header">
          <Nav />
        </div>
        <div className="main">
          <Switch>
          <Route path="/" component={MainSearch} />
        </Switch>
        </div>
      <Footer/>
      </div>
    </Router>
    )
  }
}
export default App;
