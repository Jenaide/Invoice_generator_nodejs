require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const homeRoute = require('./routes/homeRoute');

const app = express();
app.set('view engine', "ejs");


app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoute.routes);

  
const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI


// Connect to the database
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to database')
    app.listen(PORT, () => console.log(`The server is listening on ${PORT}`));
  }).catch((err) => {
    console.log('Error connecting to database')
  });