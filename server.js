var express = require('express');
var app = express();

var indexRouter = require('./routes/index');
// var aboutRouter = require('./routes/about');
var projectsRouter = require('./routes/projects');

var pug = require('pug');
var path = require('path');

// set view engine 'pug'
app.set("view engine", "pug");
app.set("views", path.join(__dirname + "/views"));
app.set("projects", path.join(__dirname + "/projects"));

// use static files in /public
app.use("/public", express.static(path.join(__dirname + "/public")));

// set port
app.set("port", process.env.PORT || 3030);


// use router modules
app.use("/", indexRouter);
// app.use("/", aboutRouter);
app.use("/", projectsRouter);


app.listen(app.get("port"), function() {
    console.log("express server is running at locallhost:" + app.get("port"));
});
