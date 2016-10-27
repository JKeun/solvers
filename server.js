var express = require('express');
var app = express();


app.set("port", process.env.PORT || 3030);

app.get("/", function(req, res) {
    res.type("text/plain");
    res.send("Server is running!");
    res.end()
});

app.listen(app.get("port"), function() {
    console.log("express server is running at locallhost:" + app.get("port"));
});
