require('dotenv').config();
const app = require('./app');
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port);

// web.surveyportal.com
// api.surveyportal.com:81
// http://localhost:8080
