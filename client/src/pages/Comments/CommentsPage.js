import React, {Component} from "react";
import PropTypes from 'prop-types'
import { Row, Column } from "../../components/Grid";
import Container from "../../components/Container";
import Section from "../../components/Section";
import { Card, CardContent, CardText, CardTitle } from "../../components/Card";
import { Button, FormContainer, Label, TextArea, InputField } from "../../components/Form"
import { connect } from "react-redux";
import { getPost, addCommentToPost} from "../../actions/postActions"
import {Link} from "react-router-dom";
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
        const newComment = {
            name: this.props.auth.user.name,
            text: this.state.text,
            user: this.props.auth.user.id
        }
        this.setState({
            text: ""
        })
        this.props.addCommentToPost(this.props.post._id, newComment)
    }
    render() {
        const {post} = this.props;
        const comments = post.comments ? post.comments : [];
        return (
            <Section>
                <Container>
                    <Row>
                        <Column className="col s12 m12 left-align">
                            <Link to="/social">Back to Posts</Link>
                        </Column>
                    </Row>
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
                                        <TextArea id="text" name="text" onChange={this.handleInputChange} value={this.state.text}/>
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
                            {comments.map(comment =>
                            <Card key={comment._id}>
                                <CardContent>
                                    <CardTitle>{comment.name}</CardTitle>
                                    <CardText>{comment.text}</CardText>
                                </CardContent>
                            </Card>)}
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