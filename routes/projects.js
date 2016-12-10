var express = require('express');
var router = express.Router();

router.get("/projects", function(req, res, next) {
    res.render("projects/list.pug");
});
    
router.get("/projects/:id", function(req, res, next) {
    res.render("projects/" + req.params.id + ".pug");
});


module.exports = router;
