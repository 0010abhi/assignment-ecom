var express = require('express');
var router = express.Router();
const data = require("../data/index.json");
const n = 2;
// import { Nanoid } from 'nanoid';

// console.log(`UUID with Nano ID sync: ${Nanoid.nanoid()}`);

// (async function() {
//   const nanoId = await NanoidAsync.nanoid();
//   console.log(`UUID with Nano ID async: ${nanoId}`);
// })();

/* GET users listing. */
router.get('/available', function (req, res, next) {
    const couponNumber = '1';
    let responseData = []
    console.log('data >>', data.orders.length, data.orders.length % n)
    if (data.orders.length % n === 0) {
        responseData.push({
            couponCode: couponNumber,
            description: 'Every nth order gets a coupon code for 10% discount'
        })
    }
    res.json(responseData)
});

module.exports = router;
