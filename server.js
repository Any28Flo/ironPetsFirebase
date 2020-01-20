require('dotenv').config();
const bodyParser   = require('body-parser');
const express      = require('express');
const hbs          = require('hbs');
const path         = require('path');
const app          = express();
// Browserify Setup
const firebase = require('firebase/app');

// Firebase App (the core Firebase SDK) is always required and

// Add the Firebase products that you want to use
require('firebase/database');
require("firebase/auth");
require("firebase/firestore");
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: "https://ironpets-ffc95.firebaseio.com",
    projectId: "ironpets-ffc95",
    storageBucket: "ironpets-ffc95.appspot.com",
    messagingSenderId: "664017099282",
    appId: process.env.APIID,
    measurementId: "G-HNV016DLTG"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//var database = firebase.database();

const index = require('./routes/index');
const admin= require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount);

})
app.set('views', path.join(__dirname, 'views'));
const db=admin.firestone();

//Middeleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//View engine setup 
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.listen(process.env.PORT,()=>{
    console.log("Server is ready");
})