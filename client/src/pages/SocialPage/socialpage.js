import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Row, Column } from "../../components/Grid";
import Container from "../../components/Container";
import Section from "../../components/Section";
import { Card, CardContent, CardText, CardTitle } from "../../components/Card";
import { Button, FormContainer, Label, TextArea, InputField } from "../../components/Form"
import { connect } from "react-redux";
import { getPosts, createPost, deletePost} from "../../actions/postActions"
import {Link} from "react-router-dom"

class SocialPage extends Component {
    constructor() {
        super();
        this.state = {
            post: {},
            posts: [],
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
        if(nextProps.posts) {
            this.setState({
                posts: nextProps.posts
            })
        }
        if(nextProps.post) {
            this.setState({
                post: nextProps.post
            })
        }
    }
    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    addPost = (e) => {
        e.preventDefault()
        const newPost = {
            name: this.props.auth.user.name,
            text: this.state.text,
            user: this.props.auth.user.id
        }
        this.props.createPost(newPost)
    }
    componentDidMount() {
        this.props.getPosts()
    }
    render() {
        const {posts} = this.props
        const {errors} = this.state
        return (
            <Section>
                <Container>
                    <Row>
                        <Column className="col s12 m12">
                            <Card>
                                <CardContent>
                                    <CardTitle>Create a New Post</CardTitle>
                                    <FormContainer>
                                        <InputField>
                                            <TextArea id="text" name="text" onChange={this.handleInputChange}/>
                                            <Label className="active" htmlFor="text">Say Something</Label>
                                            <Button className="btn waves-effect waves-light amber darken-4" onClick={this.addPost}>Submit <i className="material-icons right">send</i></Button>
                                        </InputField>
                                    </FormContainer>
                                </CardContent>
                            </Card>
                        </Column>
                    </Row>
                    <Row>
                        <Column className="col s12 m12">
                            {posts.map(post =>
                            <Card key={post._id}>
                                <CardContent>
                                    <CardTitle>{post.name}</CardTitle>
                                    <CardText>{post.text}</CardText>
                                    <Link to={`/comments/${post._id}`}>Comments</Link>
                                </CardContent>
                            </Card>)}
                        </Column>
                    </Row>
                </Container>
            </Section>

        )
    }
}
SocialPage.propTypes = {
    getPosts: PropTypes.func.isRequired,
    createPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    post: state.post.post,
    posts: state.post.posts,
    errors: state.errors,
    auth: state.auth
})
export default connect(mapStateToProps, { createPost, getPosts })(SocialPage);