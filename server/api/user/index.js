var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

var userCtrl = require('./user.controller');


router.post('/useradd/:username', userCtrl.create);
router.get('/userlist',userCtrl.listAll);
router.get('/userfind/:user_id',userCtrl.listOne);
router.get('/list', userCtrl.getAll);
router.get('/getUser/:username', userCtrl.get);
router.post('/addUser/:username', userCtrl.addUser);
router.put('/updateUser/:username', userCtrl.update);
router.delete('/deleteUser/:username', userCtrl.delete);

module.exports = router;
