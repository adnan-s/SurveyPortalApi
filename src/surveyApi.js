const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/', (req, res) => {
    var query = "select * from tblSurvey";
    db.ExecuteSelectQuery(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
});

router.post('/', (req, res) => {
    const survey = req.body;
    var query = `insert into tblSurvey(Name, Description, StartDate, EndDate, IsPublic)
    values ('${survey.name}', '${survey.description}', '${survey.startDate}', 
    '${survey.endDate}', '${survey.isPublic ? 1 : 0}')`;
    db.ExecuteSelectQuery(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
})

module.exports = router;