const router          = require('express').Router();

const { getWeather }  = require ('../models/weather');
// const dbSubway       = require('../models/subway')


router.get('/', getWeather, function(req,res) {
  res.render('userpage', {weather: res.weather});
  // res.render('userpage', {weather: res.weather});
});

// router.get('/subway', function(req,res) {
//   res.json();
// });


module.exports = router;
