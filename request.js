var request = require('request');
var fs = require('fs');

request('http://www.google.co.in', function(error, response) {
    if (!error && response.statusCode === 200) {
        //console.log(response.body);
    }
});

var s = request('http://www.google.co.in');

s.on('data', function(chunk) {
    //console.log('>>Data>> ' + chunk);
});

s.on('end', function(chunk) {
    //console.log('>>Done>>');
});

//request('http://www.google.co.in').pipe(process.stdout);

request('http://www.google.co.in').pipe(fs.createWriteStream('google.html'));