import React, {Component} from "react";
import Container from "../../components/Container";
import Section from "../../components/Section";
import {Button, FormContainer, Input, InputField, Label} from "../../components/Form/index";
import {Column, Row} from "../../components/Grid";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {loginUser, clearErrors} from "../../actions/authActions";
class Login extends Component {
    constructor() {
        super()
        this.state = {
            password: "",
            email: "",
            errors: {}
        }
    }
    componentDidMount() {
        //if user is logged in already return to home page or some other page.
        if(this.props.auth.isAuthenticated) {
            this.props.history.push("/")
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }
    handleLogin = event => {
        event.preventDefault();
        const currentUser = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.clearErrors()
        this.props.loginUser(currentUser);
    }
    render() {
        const {errors} = this.state
        return (
            <Section>
                <Container>
                    <Row>
                        <Column className="col m12">
                            <FormContainer>
                                <InputField>
                                    <Input type="email" id="email" name="email" onChange={this.handleInputChange} className={errors.email ? "validate invalid" : ""}/>
                                    <Label htmlFor="email" data-error={errors.email ? this.state.errors.email : ""} className="active">Email</Label>
                                </InputField>
                                <InputField>
                                    <Input type="password" id="password" name="password" onChange={this.handleInputChange} className={errors.password ? "validate invalid" : ""}/>
                                    <Label htmlFor="password" data-error={errors.password ? errors.password : ""} className="active">Password</Label>
                                </InputField>
                                <Button className="btn waves-effect waves-light blue-grey" onClick={this.handleLogin}>Login</Button>
                            </FormContainer>
                        </Column>
                    </Row>
                </Container>
            </Section>
        )
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
})
export default connect(mapStateToProps, {loginUser, clearErrors})(Login);