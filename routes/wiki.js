'use strict';

var express = require('express');
var router = express.Router();
const Page = require('../models').Page;
const User = require('../models').User;
module.exports = router;

router.post('/', function (req, res, next) {
    var page = Page.build(req.body)
    page.save()
        .then(function () {
            console.log('Save sucessful')
            res.redirect('/')
        })
        .catch(function (err) {
            next(err);
        });
});

router.get('/', function (req, res, next) {
    res.redirect('/');
})

router.get('/users', function (req, res, next) {
    res.send('hi');
})

router.get('/users/:', function (req, res, next) {
    var name = req.params.name
    res.send(name);
})



router.post('/users/:', function (req, res, next) {

})

router.put('/users/:', function (req, res, next) {

})

router.delete('/users/:', function (req, res, next) {

})

router.get('/add', function (req, res) {
    res.render('addpage')
})