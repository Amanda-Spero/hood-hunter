import React, {Component} from "react";
import Container from "../../components/Container";
import {Column, Row} from "../../components/Grid";
import Section from "../../components/Section";

class NoMatch extends Component {
    render() {
        return (
            <Section>
                <Container>
                    <Row className="col m12">
                        <h1>404 - page not found</h1>
                    </Row>
                </Container>
            </Section>
        )
    }
}

export default NoMatch;