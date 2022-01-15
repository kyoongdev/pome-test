var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res
    .status(200)
    .contentType("html")
    .send(`<h1>Welcome to</h1><h1>POME-SERVER</h1><h2>hi</h2>`);
});

module.exports = router;
