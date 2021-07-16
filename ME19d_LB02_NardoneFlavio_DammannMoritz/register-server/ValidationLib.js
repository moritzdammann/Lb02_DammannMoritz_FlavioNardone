var text;
if (name.length < 5) {
    text = "Bitte gib deinen Vornamen ein";
    error_message.innerHTML = text;
    return false;
}

//check lenght
if (lastname.length < 3) {
    text = "Bitte gib deinen Nachnamen ein";
    error_message.innerHTML = text;
    return false;
}

//check value
if (dropdown.value == "") {
    text = "Bitte gib dein Geschlecht an";
    error_message.innerHTML = text;
    return false;
}

//check lenght
if (isNaN(phone) || phone.length != 11) {
    text = "Bitte gib deine richtige Telefonnummer an (ohne Vorzeichen)";
    error_message.innerHTML = text;
    return false;
}

//check email
if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Bitte gib deine EMail Adresse an";
    error_message.innerHTML = text;
    return false;
}



//check message
if (message.length <= 15) {
    text = "Bitte gib uns deine Anmerkungen an (mind. 15 Zeichen)";
    error_message.innerHTML = text;
    return false;
}

//check upload
if (file.length == 0) {
    text = "Lade dein Covidzertifikat oder dein negatives Testergebnis hoch";
    error_message.innerHTML = text;
    return false;
}

//TODO: Check article for throwing errors in node js
// https://stackoverflow.com/questions/33086247/throwing-an-error-in-node-js

// Check required fields
function checkRequired(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    //if input is empty ...
    if (input.trim() === '') {
        //.. then it's not valid
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} is required`)
        }
    }
    //return validation result
    return result;
}

// Check input length
function checkLength(id, input, min, max) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
            `${id} must be at least ${min} characters`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be less than ${max} characters`)
        }
    }
    return result;
}


module.exports = {
    checkRequired,
    checkLength
}