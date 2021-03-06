'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
var mongo = require('mongodb').MongoClient;
var mongoUrl = process.env.MONGO || "mongodb://localhost:27017/vizr";
var url = require('url');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/app', express.static(__dirname + '/app'));
app.use('/build', express.static(__dirname + '/build'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.post('/new', function(req, res) {

  var username = req.body.username;
  var password = req.body.password;

  mongo.connect(mongoUrl, function (err, db) {
    if (err) throw err;
    
    var collection = db.collection('users');

    collection.find({
      username: username
    }).toArray(function (err, data) {
      if (err) throw err;

      if (data.length != 0) {
        db.close();

        res.json({
          added: false
        });
      } else {
        collection.insert({
          username: username,
          password: password
        }, function (err) {
          if (err) throw err;
          
          db.collection('posts').insert({
            username: username,
            posts: []
          }, function (err) {
            if (err) throw err;

            db.close();

          });

          res.json({
            added: true
          });
        });
      }
    });

  });
});

app.get('/existing', function (req, res) {
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
      db.close();
  
      if (data.length === 0) {
        res.json({
          allow: false
        });
      } else {
        var user = data[0];

        user.password === password 
          ? res.json({ allow: true }) 
          : res.json({ allow: false });
      }
    });
  });
});

app.post('/api/user/post', function (req, res) {
  mongo.connect(mongoUrl, function(err, db) {
    var postsCollection = db.collection('posts');
    var body = req.body;

    try {
      if (body.type === 'title') {
        postsCollection.update(
          {username: body.username},
          {$push: {posts: {_id: +body.id, title: body.title, post: []}}}
        );
      } else if (body.type === 'plot') {
        postsCollection.update(
          { username: body.username, posts: {$elemMatch: {_id: +body.id}}},
          {$push: {
            'posts.$.post': {
              type: body.type,
              xVal: body.xVal,
              yVal: body.yVal,
              xScaleType: body.xScaleType,
              yScaleType: body.yScaleType,
              index: +body.index
            }}}
        )
      } else {
        postsCollection.update(
          {username: body.username, posts: {$elemMatch: {_id: +body.id}}},
          {$push: {
            "posts.$.post": {
              type: body.type,
              text: body.text,
              index: +body.index
            }
          }}
        );
      }
    } catch(err) {
      throw err;

    } finally {
      db.close();
    }
  });

  res.json(req.body);
});

app.get('/api/user/data', function (req, res) {
  var params = url.parse(req.url, true);

  mongo.connect(mongoUrl, function (err, db) {
    if (err) throw err;

    var postsCollection = db.collection('posts');

    postsCollection.find(
      { username: params.query.username },
      { _id: 0, posts: 1}
    ).toArray(function (err, data) {
      res.json(data[0].posts);
      db.close();
    })
  })
});

app.get('/data/pulsar', function (req, res) {
  res.json(JSON.parse(fs.readFileSync(__dirname + '/app/data/pulsar_data.json', 'utf8')));
});

app.get('*', function (req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

app.listen(port, function () {
  console.log('Listening at port ' + port + '...');
});