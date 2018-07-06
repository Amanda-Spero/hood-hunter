const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validatorRegisterInput(data) {
    let errors = {};
    //convert fields to validate to string
    data.name = !isEmpty(data.name) ? data.name : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : ""
    data.email = !isEmpty(data.email) ? data.email : "";

    if(Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    }
    if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if(Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm Password field is required";
    }
    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}