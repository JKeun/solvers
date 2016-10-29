var express = require('express');
var app = express();

var indexRouter = require('./routes/index')(app);
var aboutRouter = require('./routes/about')(app);
var projectsRouter = require('./routes/projects')(app);

var pug = require('pug');
var path = require('path');

app.set("view engine", "pug");
app.set("views", path.join(__dirname + "/views"));
app.set("projects", path.join(__dirname + "/projects"));

app.set("port", process.env.PORT || 3030);


app.listen(app.get("port"), function() {
    console.log("express server is running at locallhost:" + app.get("port"));
});
