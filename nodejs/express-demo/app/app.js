const express = require('express');

const app = express();
const data = require('./data');

require('./config/app.config')(app);
require('./config/auth.config')(app, data);

app.use((req, res, next) => {
    console.log('----Current user----')
    console.log(req.user);
    next();
})

require('./routes')(app);

app.get('/', (req, res) => {
    return res.render('home');
});

module.exports = app;