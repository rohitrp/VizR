'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var mongo = require('mongodb').MongoClient;
var mongoUrl = process.env.MONGO || "mongodb://localhost:27017/vizr";
var url = require('url');

app.use('/app', express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/new', function(req, res) {
  var params = url.parse(req.url, true);
  var username = params.query.username;
  var password = params.query.password;

  mongo.connect(mongoUrl, function (err, db) {
    if (err) throw err;
    
    var collection = db.collection('users');

    collection.find({
      username: username
    }).toArray(function (err, data) {
      if (err) throw err;

      if (data.length != 0) {
        console.log("EE");
        res.end('Exists');
      } else {
        collection.insert({
          username: username,
          password: password
        }, function (err) {
          if (err) throw err;
          db.close();
          res.end('Added');
        });
      }
    });

  });
});

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.listen(port, function () {
  console.log('Listening at port ' + port + '...');
});