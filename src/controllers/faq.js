var db = require('./db');

var GetAll = function (req, res) {
    var query = 'select * from tblFAQ';
    db.ExecuteSelectQuery(query)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var Insert = function (req, res) {
    var obj = req.body;
    var query = 'insert into tblFaq(faq, answer)';
    query += `values ('${obj.faq}', '${obj.answer}' )`;
    db.ExecuteSelectQuery(query)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var Update = function (req, res) {
    var obj = req.body;
    var query = `update tblFaq set faq = '${obj.faq}', answer = '${obj.answer}' where id = ${obj.Id} `;
    db.insertOrUpdate(query)
        .then(function (data) {
            res.status(200).send('record updated successfully');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var Delete = function (req, res) {
    var query = 'delete from tblFaq where id = ' + req.params.id;
    db.executeDelete(query)
        .then(function (data) {
            res.status(200).send('record deleted successfully');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var GetById = function (req, res) {
    var query = 'select * from tblFaq where id = ' + req.params.id;
    db.ExecuteSelectQuery(query)
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
    getById: GetById,
    getAll: GetAll
};
