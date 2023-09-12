const express = require('express');
const path = require('path');
const router = express.Router();
const adminData = require('./admin');
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
    res.render('shop', {prods: adminData.product, pageTitle: 'Shop', path: '/'});
})

module.exports = router;