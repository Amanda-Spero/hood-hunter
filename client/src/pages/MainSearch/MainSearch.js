import React, {Component} from "react";
import { Container } from "../../components/Grid";
import Section from "../../components/Section";
// import MapWithASearchBox from "../../components/SearchBar";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MapWithASearchBox from "../../components/SearchBar";
// import SearchResults from "../../components/SearchResults";
// import SearchForm from "../../components/SearchForm";
import {MapContainer} from "../../components/Map"
import "./Main.css";

class MainSearch extends Component {
    render() {
        return (
          <Container>    
                <Jumbotron />
                <MapContainer/>
          </Container>
 
          
    );
  }
}

export default MainSearch;