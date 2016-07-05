'use strict'

const request = require('request');

function getwoeid() {
  let woeid;
  let city = req.body.City;
  if(city === "New York") {
    woeid = 2459115;
  } else if (city === "London") {
    woeid = 44418;
  } else {
    woeid = 615702;
  }
}

function getWeather(req,res,next) {
  getwoeid();
  request({
    url: 'https://www.metaweather.com/api/location/whoid/',
    method:'Get',
  }, function(error, reponse, body) {
    if(err) throw err
    res.weather = JSON.parse(response.body).consolidated_weather;
    next();
  });
}

module.exports = { getWeather };
