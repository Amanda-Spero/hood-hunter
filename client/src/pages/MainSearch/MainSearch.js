import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SearchBar from "../../components/SearchBar";
import SearchResults from "../../components/SearchResults";

class MainSearch extends Component {
    render() {
        return (
          <Container>     
            <Row>
              <Col size="s12">    
                <Jumbotron />
              </Col>     
            </Row> 

            <Row>
              <Col size="s12">          
                <SearchBar />
              </Col>
            </Row>
            
          <SearchResults />
            </Container>
 
          
    );
  }
}

export default MainSearch;