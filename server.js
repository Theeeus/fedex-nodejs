var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;

var soap = require('soap');

var url = path.join(__dirname, 'wsdl', 'RateService_v20.wsdl');
var params = require('./params/rateRequest.js');

app.get('/',function(req,res){
    res.send('Hello World');
});

app.get('/describe',function(req,res){
    soap.createClient(url, function(err, client) {
        res.send(client.describe());
    });
});

app.get('/rate',function(req,res){
    soap.createClient(url, function(err, client) {
        client.getRates(params, function(err, result) {
            res.json(result);
        });
    });
});

app.listen(port, function(){
    console.log('Soap app listening on port '+port);
});
