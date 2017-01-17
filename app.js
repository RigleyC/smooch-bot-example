'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());

/*
app.get('/', function(req, res) {
    res.render('index', {
        appToken: process.env.SMOOCH_APP_TOKEN
    });
});

module.exports = app;
*/

app.get('/', function(req, res) {

if (req.query['hub.verify_token'] === 'hi') {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
//--------------------------------------------
    res.render('index', {
        appToken: process.env.SMOOCH_APP_TOKEN
    });
});

module.exports = app;