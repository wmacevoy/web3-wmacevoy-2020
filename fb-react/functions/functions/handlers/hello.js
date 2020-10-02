const config = require('../util/config');
const firebase = require("firebase");
const functions = require('firebase-functions');

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

exports.hello = (req, res) => {
    return res.send('Hello World!');
}