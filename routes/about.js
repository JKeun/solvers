var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.get("/about", function(req, res) {
        res.render("about.pug");
    });
}
