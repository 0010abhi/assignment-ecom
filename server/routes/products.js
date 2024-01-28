var express = require('express');
var router = express.Router();
const data = require("../data/index.json"); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(data.products);
});

module.exports = router;
