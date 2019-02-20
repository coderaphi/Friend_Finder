// dependencies 
var path = require("path");
var express = require("express");


// HTML Routes
// =============================================================


module.exports = function (app) {
    app.use(express.static(path.join(__dirname, '../public')));
   
};