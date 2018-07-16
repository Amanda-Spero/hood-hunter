import React, {Component} from "react";
import PropTypes from 'prop-types'
import { Row, Column } from "../../components/Grid";
import Container from "../../components/Container";
import Section from "../../components/Section";
import { Card, CardContent, CardText, CardTitle } from "../../components/Card";
import { Button, FormContainer, Label, TextArea, InputField } from "../../components/Form"
import { connect } from "react-redux";
import { getPost, addCommentToPost} from "../../actions/postActions"
class CommentsPage extends Component {
    constructor() {
        super();
        this.state = {
            post: {},
            errors: {},
            text: ""
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
        if(nextProps.post) {
            this.setState({
                post: nextProps.post
            })
        }
    }
    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    }
    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    addComment = (e) => {
        e.preventDefault()
    }
    render() {
        const {post} = this.props;
        return (
            <Section>
                <Container>
                    <Row>
                        <Column className="col s12 m12">
                            <Card>
                                <CardContent>
                                    <CardTitle>{post.name}</CardTitle>
                                    <CardText>{post.text}</CardText>
                                </CardContent>
                            </Card>
                        </Column>
                    </Row>
                    <Row>
                        <Column className="col s12 m12">
                        <Card>
                            <CardContent>
                                <CardTitle>Add Comment</CardTitle>
                                <FormContainer>
                                    <InputField>
                                        <TextArea id="text" name="text" onChange={this.handleInputChange}/>
                                        <Label className="active" htmlFor="text">Say Something</Label>
                                        <Button className="btn waves-effect waves-light amber darken-4" onClick={this.addComment}>Submit <i className="material-icons right">send</i></Button>
                                    </InputField>
                                </FormContainer>
                            </CardContent>
                            </Card>
                        </Column>
                    </Row>
                    <Row>
                        <Column className="col s12 m12">

                        </Column>
                    </Row>
                </Container>
            </Section>

        )
    }
}
CommentsPage.propTypes = {
    getPost: PropTypes.func.isRequired,
    addCommentToPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    post: state.post.post,
    errors: state.errors,
    auth: state.auth
})
export default connect(mapStateToProps, {getPost, addCommentToPost})(CommentsPage);