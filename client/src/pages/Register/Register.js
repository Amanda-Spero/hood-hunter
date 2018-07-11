import React, {Component} from "react";
import PropTypes from 'prop-types'
import Container from "../../components/Container";
import Section from "../../components/Section";
import {Button, FormContainer, Input, InputField, Label} from "../../components/Form/index";
import {Column, Row} from "../../components/Grid"
import {connect} from "react-redux";
import {registerUser} from "../../actions/authActions";
import {withRouter} from "react-router-dom";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            password: "",
            email: "",
            password2: "",
            name: "",
            errors: {}
        }
    }
    componentDidMount() {
        //If user is logged in already, then return to home page or some other page.
        if(this.props.auth.isAuthenticated) {
            this.props.history.push("/")
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
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
    handleRegister = event => {
        //TODO move to an action
        event.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.registerUser(newUser, this.props.history);
    }
    render() {
        const {errors} = this.state;
        return (
            <Section>
                <Container>
                    <Row>
                        <Column className="col m12">
                            <FormContainer>
                                <InputField>
                                    <Input type="text" id="name" name="name" onChange={this.handleInputChange} value={this.state.name} className={errors.name ? "validate invalid" : ""}/>
                                    <Label htmlFor="name" data-error={errors.name ? errors.name : ""} className={errors.name ?"active" : ""}>Name</Label>
                                </InputField>
                                <InputField>
                                    <Input type="email" id="email" name="email" onChange={this.handleInputChange} value={this.state.email} className={errors.email ? "validate invalid" : ""}/>
                                    <Label htmlFor="email" data-error={errors.email ? errors.email : ""} className={errors.email ?"active" : ""}>Email</Label>
                                </InputField>
                                <InputField>
                                    <Input type="password" id="password" name="password" onChange={this.handleInputChange} value={this.state.password} className={errors.password ? "validate invalid" : ""}/>
                                    <Label htmlFor="password" data-error={errors.password ? errors.password : ""} className={errors.password ?"active" : ""}>Password</Label>
                                </InputField>
                                <InputField>
                                    <Input type="password" id="password2" name="password2" onChange={this.handleInputChange} className={errors.password2 ? "validate invalid" : ""}/>
                                    <Label htmlFor="password2" value={this.state.password2} data-error={errors.password2 ? errors.password2 : ""} className={errors.password2 ?"active" : ""}>Confirm Password</Label>
                                </InputField>
                                <Button className="btn waves-effect waves-light blue-grey" onClick={this.handleRegister}>Register</Button>
                            </FormContainer>
                        </Column>
                    </Row>
                </Container>
            </Section>
        )
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, {registerUser})(withRouter(Register));