var express = require('express');
var router = express.Router();
var nowVideoState = 'None'
/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body.where)
  nowVideoState = req.body.where
  res.send('respond with a resource');
});

router.get('/now', function(req, res, next) {
  console.log("video select")
  res.send(nowVideoState);
});

module.exports = router;
