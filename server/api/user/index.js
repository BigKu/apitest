var express = require('express');
var path = require('path');
var fs =require('fs');

var router = express.Router();

router.get('/list', function (req, res) {
  fs.readFile( path.join(__dirname, '../../../data/user.json'), 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
  });
});

router.get('/getUser/:username', function(req, res){
    fs.readFile(path.join(__dirname, '../../../data/user.json'), 'utf8',function (err, data) {
      var users =JSON.parse(data);
      res.json(users[req.params.username]);
    });
});

module.exports = router;

