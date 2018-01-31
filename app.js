var http = require('http');
var public = require('./js/public');
var main = require('./js/main');
var notFound = require('./js/notFound');
var index = require('./js/index');
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/advanture";
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static(__dirname + "/html"));

var i=1000;

app.get(/\.(html|css|js|png|jpg|mp4|json)$/, function(request, response){
    public(request, response);
});

app.get("/", function(request, response){
    index(request,response);
});

app.post("/home", urlencodedParser, function (request, response) {
    var username = request.body.username;
    var password = request.body.password;

    if(!request.body) return response.sendStatus(400);
    else {

        if (request.body.submit == 'ВОЙТИ') {

            mongoClient.connect(url, function (err, db) {
                var collection = db.collection("users");

                if (err) return console.log(err);

                collection.find({login: request.body.username, password: request.body.password}).toArray(function (err, results) {

                    i = results.length;
                    if(i==0){}
                        //request
                        //return new index(request, response);
                    else
                        return new main(request, response);
                });
                db.close();
            });
        }

        else {
            mongoClient.connect(url, function (err, db) {
                var collection = db.collection("users");
                var user = {login: request.body.username, password: request.body.password};

                if (request.body.password.length < 6) {
                }
                //return new index(request, response);
                else {
                    collection.insertOne(user, function (err, result) {
                        if (err) {
                            return console.log(err);
                        }
                        return new main(request, response);
                    });
                    db.close();
                }
            });
        }
    }

});



app.listen(3000);
console.log('Сервер работает: порт 3000...');

