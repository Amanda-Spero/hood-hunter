const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validatorLoginInput(data) {
    let errors = {};
    //convert fields to validate to string
    data.password = !isEmpty(data.password) ? data.password : "";
    data.email = !isEmpty(data.email) ? data.email : "";

    if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}