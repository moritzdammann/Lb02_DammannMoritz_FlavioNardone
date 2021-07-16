function validate() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var dropdown = document.getElementById("dropdown");
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    var message = document.getElementById("message").value;
    var file = document.getElementById("file").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";
    //check lenght
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

    //check ob Geschlecht ausgewählt ist
    if (dropdown.value == "") {
        text = "Bitte gib dein Geschlecht an";
        error_message.innerHTML = text;
        return false;
    }

    //check phone number
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




    //check lenght
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







    alert("Form Submitted Successfully!");
    return true;
}


