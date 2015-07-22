var express = require('express');
var router = express.Router();
//check on route here???
// var validate = require('../public/javascripts/validations.js');
//require db and collection???
var db = require('monk')(process.env.MONGOLAB_URI);
var bucket = db.get('bucket');


/* GET home page. */
router.get('/', function(req, res, next) {
  bucket.find({}, function (err, bucket) {
  res.render('index', {bucket: bucket});

  })
});

router.get('/bucket/new', function (req, res, next) {
  res.render('bucket/new');
})

router.post('/bucket/new', function (req, res, next) {
  // var errors = validate(req.body.title, req.body.location, req.body.description);
  // if(errors.length > 0){
  //   res.render('bucket/new');
  // } else {
    bucket.insert({title: req.body.title, location: req.body.location, description: req.body.description})
    res.redirect('/')
  
})
module.exports = router;
