var express = require('express');
var router = express.Router();
const db = requi
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save', function(req, res, next) {
  const customer= req.body.customer;
});

module.exports = router;
