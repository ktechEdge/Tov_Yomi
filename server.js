const express = require('express');
const app = express();
const port = 5959;

const bodyParser = require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));
app.set("view engine","ejs");

let db_M = require('./database');
global.db_pool = db_M.pool;
app.use(express.json());

const car_rtr = require('./routes/designTest');
app.use('/test',car_rtr);

app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
});
const users =require('./routes/users');
app.use('/users',users);