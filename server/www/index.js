var express = require('express');
var router = express.Router();
var wwwCtrl = require('./www.controller');

router.get('/', wwwCtrl.home);

module.exports = router;