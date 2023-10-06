require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Variables
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL

app.use(express.urlencoded({ extended: false }));

// Connect to the database
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connected to database')
    app.listen(PORT, () => console.log(`The server is listening on ${PORT}`));
  }).catch((err) => {
    console.log('Error connecting to database')
  });