const express = require('express');
const cors = require('cors');
const faqApi = require('./api/faqApi');
const surveyApi = require('./api/surveyApi');
const questionApi = require('./api/questionApi');
const quoteApi = require('./api/quoteApi');
const userApi = require('./api/userApi');
const supportApi = require('./api/supportApi');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('src'));
app.use('/api/faq', faqApi);
app.use('/api/survey', surveyApi);
app.use('/api/question', questionApi);
app.use('/api/qutoe', quoteApi);
app.use('/api/user', userApi);
app.use('/api/support', supportApi);

module.exports = app;
