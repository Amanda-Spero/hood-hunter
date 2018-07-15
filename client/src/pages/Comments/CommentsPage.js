import React, {Component} from "react";
import { Row, Col } from "../../components/Grid";
import Container from "../../components/Container";
import Section from "../../components/Section";

class CommentsPage extends Component {
    render() {
        return (
            <Section>
                <Container>
                    <Row>
                        <form className="col s12">
                            <Row>
                                <div className="input-field col s6">
                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                    <label htmlFor="textarea1">Say Something</label>
                                </div>
                            </Row>

                            <Row>
                                <div className='col-md-4'>
                                    <button className="btn waves-effect waves-light" type="submit">Send
                                    <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </Row> 
                     </form>
                    </Row>

                    <Row>



                    </Row>
                </Container>
            </Section>

        )
    }
}

export default CommentsPage;