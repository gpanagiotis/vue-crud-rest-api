var mysql = require('mysql');
var express = require('express');
var cors = require('cors');

var app = express();

app.use(express.json())
//app.use(express.urlencoded())

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'spa-rest',
    user: 'uroot',
    password: 'PASSWORD',
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

app.use(function (req, res, next) {

    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


const getData = (callback) => {
    const res = [];
    connection.query('SELECT * FROM tasks', function (error, results, fields) {
        if (error)
            throw error;
        results.forEach(result => {
            //console.log(result);
            //res.push(result);
            res.push(result);
        });
        callback(res);
    });
}


app.get('/', function (req, res) {
    getData((data) => {
        /*
        str = '';
        data.forEach(dt => {
            str +=  `<div></div>`; //dt.id + " : " + dt.label + '<br/>';
        });
        */
        res.json(data);

        //res.send('Hello Express World /!<br/>' + str);
    });
    console.log('hi Express! :) ');
    //res.json({ username: 'Flavio' })
});

app.get('/get-data', function (req, res) {
    console.log('hi Express data! :) ');
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");

    getData((data) => {
        res.json(data);
    });

});


app.post('/add-task', function (req, res) {
    //console.log(req);
    // const name = req.body.name;
    // const body = req.body.body;

    let payload = {
        name: req.body.name,
        body: req.body.body
    };

    connection.query("INSERT INTO tasks SET ?", payload, function(err, rows) {
        console.log(err);
        console.log(rows);
    });

    //res.send('')
    res.json({status:'ok'});
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
