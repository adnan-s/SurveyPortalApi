var db = require('./db');

var Insert = function (req, res) {
    var quote = req.body;
    var query = '';
    quote.forEach(function (q) {
        query += `insert into tblQuote(surveyId, questionId, Response) 
        values(${q.surveyId}, ${q.questionId}, '${q.response}')`;
    });
    db.insertOrUpdate(query)
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

module.exports = {
    insert: Insert
};

