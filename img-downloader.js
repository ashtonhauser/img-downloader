var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(err) {
         console.log('An Error Occured.');
       })
       .on('response', function(response) {
         console.log('Response Status Code: ' + response.statusCode, 'Response Message: ' + response.statusCode, 'Content Type: ' + response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));
