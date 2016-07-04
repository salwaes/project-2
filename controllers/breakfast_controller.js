const router = require('express').Router();

router.get('/', function(req,res) {
  res.render('user');
});

module.exports = router;
