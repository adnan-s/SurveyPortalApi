var db = require('./db');

var Insert = function (req, res) {
    var support = req.body;
    var query = `insert into tblSupport(Contact, ShortDesc, Description, Email, Phone, SkypeId, WebAddress)
    values ('${support.contact}', '${support.shortdesc}', '${support.description}', 
    '${support.email}', '${support.phone}','${support.skypeId}','${support.webAddress} ')`;
    db.insertOrUpdate(query)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var Update = function (req, res) {
    var support = req.body;
    var query = `update tblSupport set = Contact = '${support.contact}', 
    ShortDesc = '${support.shortdesc}', 
    Description = '${support.description}', 
    Email = '${support.email}',  
    Phone = '${support.phone}', 
    SkypeId = '${support.skypeId}', 
    WebAddress = '${support.webAddress}', 
    WHERE Id = ${support.Id}`;
    db.insertOrUpdate(query)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var Delete = function (req, res) {
    var query = `delete from tblSupport where id = ${req.params.id}`;
    db.executeDelete(query)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var GetAll = function (req, res) {
    var query = 'select * from tblSupport';
    db.ExecuteSelectQuery(query)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var GetById = function (req, res) {
    var query = `select * from tblSupport where id = ${req.params.id}`;
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
