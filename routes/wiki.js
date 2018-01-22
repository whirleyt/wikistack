'use strict';

var express = require('express');
var router = express.Router();
module.exports = router;

router.get('/', function(req, res, next){
    res.redirect('/')
})

router.get('/users', function(req, res, next) {
    res.send('hi');
})

router.get('/users/:', function(req, res, next) {
    var name = req.params.name
    res.send(name);
})

router.post('/', function(req, res, next){
    console.log(req.body)
    res.json(req.body)
})

router.post('/users/:', function(req, res, next){
    
})

router.put('/users/:', function(req, res, next){
    
})

router.delete('/users/:', function(req, res, next){
    
})

router.get('/add', function(req, res){
  res.render('addpage')
})