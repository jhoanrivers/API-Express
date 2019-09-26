var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./app/controller/appcontroller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(port);
console.log("Port ready in :"+port);
