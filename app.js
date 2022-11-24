// Require dependencies
const express = require('express');
const router = require('./app/routers/router');

// Create express app
const app = express();

const port = 3002;

// view engine
app.set('views', './views');
app.set('view engine', 'ejs');

// MW
app.use(express.static(__dirname + '/public'));
// Router
app.use(router);

// Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });