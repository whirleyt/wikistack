'use strict';

var express = require('express');
var router = express.Router();
module.exports = router;
var index = require('../models/index');
var wikiRouter = require('./wiki')
var userRouter = require('./user')

router.use('/wiki', wikiRouter)

