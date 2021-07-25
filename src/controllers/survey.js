var db = require('./db');

var Insert = function (req,res) {
    var survey = req.body;
    var query = `insert into tblSurvey(ClientId,Name,Description,StartDate,EndDate,IsPublic) 
    values ('${survey.ClientId}',
    '${survey.Name}',
    '${survey.Description}',
    '${survey.StartDate}',
    '${survey.EndDate}',
    '${survey.IsPublic}')`;
    db.inserOrUpdate(query)
    .then(function (data) {
        res.status(200).send(data);
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
};

var Update = function (req,res) {
    var survey = req.body;
    var query = `update tblSurvey set 
    ClientId = '${survey.ClientId}', 
    Name ='${survey.Name}', 
    Description='${survey.Description}',
    StartDate='${survey.StartDate}',
    EndDate='${survey.EndDate}',
    IsPublic= ${survey.IsPublic} 
    where Id = ${survey.Id}`;
    db.inserOrUpdate(query)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var Delete = function (req,res) {
    var query = `delete from tblSurvey where id = ${req.params.Id}`;
    db.executeDelete(query)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var GetAll = function (req,res) {
    var query = `select * from tblSurvey`;
    db.executeSelectQuery(query)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var GetById = function (req,res) {
    var query = `select * from tblSurvey where id = ${req.params.Id}`;
    db.getDataSet(query)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

module.exports = {
    insert: Insert,
    update: Update,
    delete: Delete,
    getAll: GetAll,
    getById: GetById
};
