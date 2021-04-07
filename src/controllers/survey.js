const db = require('./db');

const Insert = (req,res) => {
    const survey = req.body;
    var query = `insert into tblSurvey(ClientId,Name,Description,StartDate,EndDate,IsPublic) 
    values ('${survey.ClientId}',
    '${survey.Name}',
    '${survey.Description}',
    '${survey.StartDate}',
    '${survey.EndDate}',
    '${survey.IsPublic}')`;
    db.inserOrUpdate(query)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(501).send(err));
}

const Update = (req,res) => {
    const survey = req.body;
    var query = `update tblSurvey set 
    ClientId = '${survey.ClientId}', 
    Name ='${survey.Name}', 
    Description='${survey.Description}',
    StartDate='${survey.StartDate}',
    EndDate='${survey.EndDate}',
    IsPublic= ${survey.IsPublic} 
    where Id = ${survey.Id}`
    db.inserOrUpdate(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
}

const Delete = (req,res) => {
    var query = `delete from tblSurvey where id = ${req.params.Id}`
    db.executeDelete(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
}

const GetAll = (req,res) => {
    var query = `select * from tblSurvey`
    db.executeSelectQuery(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
}

const GetById = (req,res) => {
    var query = `select * from tblSurvey where id = ${req.params.Id}`
    db.getDataSet(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
}
module.exports = {
    insert: Insert,
    update: Update,
    delete: Delete,
    getAll: GetAll,
    getById: GetById
}