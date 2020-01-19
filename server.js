require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzLmeFsDPH7IQ1gCHoMVtgGYiPSiGSx18",
    authDomain: "ironpets-ffc95.firebaseapp.com",
    databaseURL: "https://ironpets-ffc95.firebaseio.com",
    projectId: "ironpets-ffc95",
    storageBucket: "ironpets-ffc95.appspot.com",
    messagingSenderId: "664017099282",
    appId: "1:664017099282:web:ee84157fbd80f8077416cb",
    measurementId: "G-HNV016DLTG"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firabese.database();
  
const index = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));

//View engine setup 
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index);

app.listen(process.env.PORT,()=>{
    console.log("Server is ready");
})