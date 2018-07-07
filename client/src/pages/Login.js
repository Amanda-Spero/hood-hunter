import React, {Component} from "react";
import Section from "../components/Section";
import {Button, FormContainer, Input, InputField, Label} from "../components/Form/index";
import {Column, Row, Container} from "../components/Grid";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {loginUser} from "../actions/authActions";
class Login extends Component {
    constructor() {
        super()
        this.state = {
            password: "",
            email: "",
            errors: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/welcome')
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
                                    <Input type="email" id="email" name="email" onChange={this.handleInputChange} value={this.state.email} className={errors.email ? "validate invalid" : ""}/>
                                    <Label htmlFor="email" data-error={errors.email ? this.state.errors.email : ""} className={errors.email ?"active" : ""}>Email</Label>
                                </InputField>
                                <InputField>
                                    <Input type="password" id="password" name="password" onChange={this.handleInputChange} value={this.state.password} className={errors.password ? "validate invalid" : ""}/>
                                    <Label htmlFor="password" data-error={errors.password ? errors.password : ""} className={errors.password ?"active" : ""}>Password</Label>
                                </InputField>
                                <Button className="btn waves-effect waves-light" onClick={this.handleLogin}>Login</Button>
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
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
})
export default connect(mapStateToProps, {loginUser})(Login);