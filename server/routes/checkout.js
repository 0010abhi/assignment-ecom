var express = require('express');
var router = express.Router();
// const data = require("../data/index.json");

/* GET users listing. */
router.post('/', function (req, res, next) {
    const body = req.body;
    console.log('check out request', body);
    res.json({message: 'Order Placed Successfully'})
});

module.exports = router;
