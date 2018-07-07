import React, {Component} from "react";
import Section from "../components/Section";
import {Row, Column, Container} from "../components/Grid";
import {Link} from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <Section>
                <Container>
                    <Row>
                        <Column className="col m12">
                            <Link to="/login" >Login</Link>
                            <br></br>
                            <Link to="/register">Register</Link>
                        </Column>
                    </Row>
                </Container>
            </Section>
        )
    }
}

export default Home;