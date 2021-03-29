const express = require('express');
const cors = require('cors');
const db = require('./db');
const faqApi = require('./faqApi');
const surveyApi = require('./surveyApi');
const questionApi = require('./questionApi');
const quoteApi = require('./quoteApi');
const userApi = require('./userApi');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('src'));
app.use('/faq', faqApi);
app.use('/survey', surveyApi);
app.use('/question', questionApi);
app.use('/qutoe', quoteApi);
app.use('/user', userApi);

module.exports = app;
