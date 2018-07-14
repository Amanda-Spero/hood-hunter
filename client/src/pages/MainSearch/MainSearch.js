import React, {Component} from "react";
import { Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import MapWithASearchBox from "../../components/SearchBar";
// import SearchResults from "../../components/SearchResults";
// import SearchForm from "../../components/SearchForm";

class MainSearch extends Component {
    render() {
        return (
          <Container>    
                <Jumbotron />          
                <MapWithASearchBox /> 
          <div className="container">
            <div className="section">
              <div className="row">
                {/* <div className="col s12 m5">
              </div>     */}
                <div className="col s12 m7">      
                  {/* <SearchResults /> */}
                </div>
              </div>
              <div className="resultsRow">
              </div>
            </div>                        
           </div>
          </Container>
 
          
    );
  }
}

export default MainSearch;