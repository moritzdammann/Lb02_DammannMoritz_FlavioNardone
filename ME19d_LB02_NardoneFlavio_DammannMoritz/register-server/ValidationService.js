// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields

    // Aufgabe 4a
    let result = validateLib.checkRequired("name", userObj.name);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkRequired("lastname", userObj.lastname);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) {
        return result;
    }
    result = validateLib.checkRequired("phone", userObj.phone);
    if (result.isNotValid) {
        return result;
    }

    

    // Aufgabe 4b
    result = validateLib.checkLength("name", userObj.name, 2, 20);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkLength("lastname", userObj.lastname, 2, 50);
    if (result.isNotValid) {
        return result;
    }


    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) {
        return result;
    }


    // Aufgabe 4c
    result = validateLib.checkPhone("phone", userObj.phone);
    if (result.isNotValid) {
        return result;
    }

    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}
