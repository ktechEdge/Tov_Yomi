const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine","ejs");
let db_M = require('./database');
global.db_pool = db_M.pool;
const port = 5959;
app.use(express.json());
app.listen(port, () => {
    console.log(`Now listening on port http://localhost:${port}`);
});
const users =require('./routes/users');
app.use('/users',users);
