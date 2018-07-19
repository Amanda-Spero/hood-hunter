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
import isEmpty from "../../validation/is-empty";
import "./spanHover.css"
import Jumbotron from "../../components/Jumbotron4/Jumbotron4";
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
        this.setState({
            text: ""
        })
        this.props.createPost(newPost)
    }
    componentDidMount() {
        this.props.getPosts()
    }
    deleteAPost = (id) => {
        this.props.deletePost(id)
    }
    render() {
        const {posts} = this.props
        const {id} = this.props.auth.user
        return (
        <div>
            <Jumbotron />
            <Section>
                <Container>
                    <Row>
                        <Column className="col s12 m12">
                            <Card>
                                <CardContent>
                                    <CardTitle>Create a New Post</CardTitle>
                                    <FormContainer>
                                        <InputField>
                                            <TextArea id="text" name="text" onChange={this.handleInputChange} value={this.state.text}/>
                                            <Label className="active" htmlFor="text">Say Something</Label>
                                            {isEmpty(this.state.text) || this.state.text.length <10 || this.state.text.length > 300 ? (<Button className="btn waves-effect waves-light amber darken-4" onClick={this.addPost} disabled>Submit <i className="material-icons right">send</i></Button>):(<Button className="btn waves-effect waves-light amber darken-4" onClick={this.addPost}>Submit <i className="material-icons right">send</i></Button>)}
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
                                    <br/>
                                    {post.user === id ? (<span className="red-text deleteLink" onClick={() => this.deleteAPost(post._id)}>Delete Post</span>):(<span></span>)}
                                </CardContent>
                            </Card>)}
                        </Column>
                    </Row>
                </Container>
            </Section>
        </div>
        )
    }
}
SocialPage.propTypes = {
    getPosts: PropTypes.func.isRequired,
    createPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    post: state.post.post,
    posts: state.post.posts,
    errors: state.errors,
    auth: state.auth
})
export default connect(mapStateToProps, { createPost, getPosts, deletePost })(SocialPage);