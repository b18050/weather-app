var request = require('request');

var apiKey = 'c7a69c5bd631d1a7f47e9b3b99c1198c';
var city = 'portland';
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
  	var weather = JSON.parse(body)
  	var message = weather.main.temp;

    console.log(message);
  }
});
