var express = require('express');
var cors = require('cors');
var faqApi = require('./api/faqApi');
var surveyApi = require('./api/surveyApi');
var questionApi = require('./api/questionApi');
var quoteApi = require('./api/quoteApi');
var userApi = require('./api/userApi');
var supportApi = require('./api/supportApi');

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('/'));

app.use('/faq', faqApi);
app.use('/survey', surveyApi);
app.use('/question', questionApi);
app.use('/qutoe', quoteApi);
app.use('/user', userApi);
app.use('/support', supportApi);

module.exports = app;
