import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import MainSearch from "./pages/MainSearch";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
    <Router>
      <React.Fragment>
          <Nav/>
            <Route exact path="/" component={MainSearch}/>
          <Footer/>
      </React.Fragment>
    </Router>
    )
  }
}
export default App;
