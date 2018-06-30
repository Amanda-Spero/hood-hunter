import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App Site">
          <div className="Site-content">
            <div className="App-Header">
              <Navbar />
              </div>
            <div className="main">
              <Jumbotron />
              <SearchBar />
              <SearchResults />

            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
