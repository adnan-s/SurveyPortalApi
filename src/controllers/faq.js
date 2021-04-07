const db = require('./db');

const GetAll = (req, res) => {
    var query = "select * from tblFAQ"
    db.ExecuteSelectQuery(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
}

const Insert = (req, res) => {
    const obj = req.body;
    var query = "insert into tblFaq(faq, answer)";
    query += `values ('${obj.faq}', '${obj.answer}' )`
    db.ExecuteSelectQuery(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
}

const Update =  (req, res) => {
    var obj = req.body;
    var query = `update tblFaq set faq = '${obj.faq}', answer = '${obj.answer}' where id = ${obj.Id} `;
    db.insertOrUpdate(query)
        .then(data => res.status(200).send('record updated successfully'))
        .catch(err => res.status(501).send(err));
}

const Delete = (req, res) => {
    var query = "delete from tblFaq where id = " + req.params.id;
    db.executeDelete(query)
        .then(data => res.status(200).send('record deleted successfully'))
        .catch(err => res.status(501).send(err));
}

const GetById = (req, res) => {
    var query = "select * from tblFaq where id = " + req.params.id;
    db.ExecuteSelectQuery(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
}

module.exports = {
    insert: Insert,
    update: Update,
    delete: Delete,
    getById: GetById,
    getAll: GetAll
};
