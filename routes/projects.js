var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.get("/projects", function(req, res, next) {
        res.render("projects/list.pug");
    });
    
    app.get("/projects/:id", function(req, res, next) {
        res.render("projects/" + req.params.id + ".pug");
    });
}
