var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.listen(8080, () => console.log("Server is running!"));
app.use(express.json())

app.post('/order-insert', (req, res) => {
    console.log("Got a request");
    let body = req.body;
    console.log(body);
    let url = 'mongodb://localhost:27017';
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        console.log("Mongodb connection successful!");
        var dbo = db.db('Orders');
        dbo.collection('hello').insertMany(body, (err, res) => {
            if (err) throw err;
            console.log("Successfully inserted!");
        })
    })
})