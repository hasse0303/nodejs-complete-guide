const express = require('express');
const path = require('path');
const router = express.Router();
const product = [];
const rootDir = require('../util/path');

router.get('/add-product', (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
})

router.post('/add-product', (req, res, next) => {
    product.push({title: req.body.title})
    res.redirect('/');
})

exports.router = router;
exports.product = product;