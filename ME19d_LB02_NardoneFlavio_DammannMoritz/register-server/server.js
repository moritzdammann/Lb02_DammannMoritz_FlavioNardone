/*
Registration server
Server um Benutzer zu registrieren
 */

'use strict';

let express = require("express");
let bodyParser = require("body-parser");
let app = express();
const {v4: uuidv4} = require('uuid');
const UserRepository = require('./UserRepository');
const Validation = require('./ValidationService');


const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 min

//Warning: Korrekt setzen!!
const staticPath = './register-server/data/';
const registrationFile = staticPath + 'registration.json';


// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Content-Type', 'application/json');
    next();
});


//get rquest (test uuid)
app.get('/test1', (req, res) => {
    const id = uuidv4();
    res.send(id);
});


// necessary for posting data
// support json encoded bodies
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

/*  1. Writing to file
    https://stackabuse.com/reading-and-writing-json-files-with-node-js/
 */

app.post('/register', (req, res) => {

    const HTTP_STATUS_NO_ACCEPTABLE = 406;
    //Status wenn Daten nicht valide sind

    /* Aufgabe 1
        a,b,c
     */
    let userObj = {
        "id": uuidv4(),
        "name": req.body.user.name,
        "lastname": req.body.user.lastname,
        "username": req.body.user.username,
        "email": req.body.user.email,
        "phone": req.body.user.phone,
    }

    let result = Validation.validateUser(userObj);
    if (result.isNotValid) {
        res.status(HTTP_STATUS_NO_ACCEPTABLE).send(result.msg);
    } else {
        //Speicherung des neuen Benutzers
        let userRepo = new UserRepository(registrationFile);
        userRepo.read()
            .then((data) => {
                //log data for analysis
                console.log(userObj);
                //neuen user in das JSON-File hinzufügen
                data.push(userObj);
                return data;
            })
            .then(data => userRepo.save(data))
            .catch(error => {
                console.error(error);
            });
            //Status um zu signalisieren, dass der User erfolgreich eingefügt wurde
        res.status(201).send(`User ${userObj.username} eingefügt!`);
    }
});

