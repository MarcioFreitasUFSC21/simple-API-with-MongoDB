var express = require('express');
var router = express.Router();
const db = require('../db');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save', async function(req, res, next) {
  const customer= req.body.customer;
 const result = await db.insert({customer: customer});

});

module.exports = router;
