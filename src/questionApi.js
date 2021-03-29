const express = require('express');
const db = require('./db');
const router = express.Router();

router.post('/', (req, res) => {
    const question = req.body;
    var query = `declare @qid int;
    insert into tblQuestion(Description, SurveyId) values('${question.description}', ${question.surveyId});    
    select @qid = SCOPE_IDENTITY();
    `;
    question.options.forEach((option) => {
        var subquery = `insert into tblOptions(QuestionId, Text, type) values(@qid, '${option.text}', '${option.type}');`
        query += subquery;
    });
    db.insertOrUpdate(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
})

router.get('/:surveyId', (req, res) => {
    const surveyId = req.params.surveyId;
    var query = "select * from tblQuestion where SurveyId = " + surveyId;
    db.getDataSet(query).then((dsQuestions) => {
        query = "select * from tblOptions where Questionid in (select Id from tblQuestion where SurveyId = "+ surveyId +")"

        db.getDataSet(query).then((dsOptions) => {
            dsQuestions.forEach((q) => {
                q.options = dsOptions.filter(option => option.QuestionId === q.Id)
            })
            res.status(200).send(dsQuestions);
        });
    });
});

module.exports = router;