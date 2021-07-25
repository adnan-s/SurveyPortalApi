var db = require('./db');

var Insert = function (req, res) {
    var question = req.body;
    var query = `declare @qid int;
    insert into tblQuestion(Description, SurveyId) values('${question.description}', ${question.surveyId});    
    select @qid = SCOPE_IDENTITY();
    `;
    question.options.forEach(function (option) {
        var subquery = `insert into tblOptions(QuestionId, Text, type) 
        values(@qid, '${option.text}', '${option.type}');`;
        query += subquery;
    });
    db.insertOrUpdate(query)
        .then(function(data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var GetById = function (req, res) {
    var surveyId = req.params.surveyId;
    var query = 'select * from tblQuestion where SurveyId = ' + surveyId;
    db.getDataSet(query).then(function (dsQuestions) {
        query = `select * from tblOptions where Questionid in 
        (select Id from tblQuestion where SurveyId = ${surveyId})`;

        db.getDataSet(query).then(function(dsOptions) {
            dsQuestions.forEach(function(q) {
                q.options = dsOptions.filter(function (option) {
                    return option.QuestionId === q.Id;
                });
            });
            res.status(200).send(dsQuestions);
        });
    });
};

module.exports = {
    insert: Insert,
    getById: GetById
};