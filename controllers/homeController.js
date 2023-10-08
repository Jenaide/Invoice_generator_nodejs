const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');

const homeView = (req, res) => {
    res.render('home');
}

module.exports = {
    homeView
}