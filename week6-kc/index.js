var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
 })

app.get('/about', function (req, res) {
    res.sendFile( __dirname + "/" + "about.html" );
});

app.get('/contactme', function (req, res) {
    res.sendFile( __dirname + "/" + "contactme.html" );
});

app.get('*', function (req, res) {
    res.sendFile( __dirname + "/" + "404.html" );
});

var server = app.listen(8080, function () {
var host = server.address().address
var port = server.address().port

console.log("Example app listening at http://%s:%s", host, port)
})
