const router = require('express').Router();
const { getWeather }  = require ('../models/weather');

router.get('/', function(req,res) {
  res.render('home', {user: req.session.user});
});

module.exports = router;
