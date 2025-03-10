require('dotenv').config();
var express = require('express');
var app = express();


var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); 

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function (req, res) {
  let ip = req.ip;
  let lan = req.headers['accept-language'];
  let software = req.headers['user-agent'];
  res.json({ ipaddress: ip, language: lan, software: software });
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
