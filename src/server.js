const app = require('./app');
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port);
