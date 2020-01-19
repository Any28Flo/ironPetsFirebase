require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const index = require('./routes/index');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index);

app.listen(process.env.PORT,()=>{
    console.log("Server is ready");
})