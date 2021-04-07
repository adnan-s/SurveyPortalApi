const db = require('./db');

const Insert = (req, res) => {
    const quote = req.body;
    var query = '';
    quote.forEach(q => {
        query += `insert into tblQuote(surveyId, questionId, Response) 
        values(${q.surveyId}, ${q.questionId}, '${q.response}')`;
    });
    db.insertOrUpdate(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
}

module.exports = {
    insert: Insert
};

