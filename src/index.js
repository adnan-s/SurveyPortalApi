const express = require('express');
const cors = require('cors');
const db = require('./db');
const port = 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('src'));

app.get('/', (req,res) => {
    res.sendFile('index.html');
});

// all servey apis
app.post('/survey', (req, res) => {
    const survey = req.body;
    var query = "insert into tblSurvey(Name, Description, StartDate, EndDate, IsPublic)";
    query += `values ('${ survey.name }', '${ survey.description }', '${ survey.startDate }', '${ survey.endDate }', '${survey.isPublic ? 1 : 0}')`
    db.ExecuteSelectQuery(query)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(501).send(err));
})

app.post('/addquestion', (req, res) => {
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

app.get('/questions',(req,res) => {
    var query = "select * from tblQuestion where SurveyId = 1";

    db.getDataSet(query).then((dsQuestions) => {
        query = "select * from tblOptions where Questionid in (select Id from tblQuestion where SurveyId = 1)"

        db.getDataSet(query).then((dsOptions) => {

            dsQuestions.forEach((q) => {
                q.options = dsOptions.filter( option => option.QuestionId === q.Id)
            })
            res.status(200).send(dsQuestions);
        });    
    });
});

app.post('/quote', (req, res) => {
    const quote = req.body;
    var query = '';
    quote.forEach(q => {
        query += `insert into tblQuote(surveyId, questionId, Response) 
        values(${q.surveyId}, ${q.questionId}, '${q.response}')`;
    });
    console.log(query);
    db.insertOrUpdate(query)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(501).send(err));
})

app.get('/surveylist', (req,res) => {
    var query = "select * from tblSurvey";
    console.log(query);
    db.ExecuteSelectQuery(query)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(501).send(err));
});

// here you would create FAQ api.
app.get('/faqlist', (req,res) => {
    var query = "select * from tblFAQ"
    db.ExecuteSelectQuery(query)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(501).send(err));
})

app.post('/faq', (req, res) => {
    // here you need to insert faq record.
    const obj = req.body;
    var query = "insert into tblFaq(faq, answer)";
    query += `values ('${ obj.faq }', '${ obj.answer }' )`
    db.ExecuteSelectQuery(query)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(501).send(err));
})

app.listen(port);