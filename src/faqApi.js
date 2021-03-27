const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/', (req, res) => {
    var query = "select * from tblFAQ"
    db.ExecuteSelectQuery(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
})

router.post('/', (req, res) => {
    const obj = req.body;
    var query = "insert into tblFaq(faq, answer)";
    query += `values ('${obj.faq}', '${obj.answer}' )`
    db.ExecuteSelectQuery(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
})

router.put('/', (req, res) => {
    var obj = req.body;
    var query = `update tblFaq set faq = '${obj.faq}', answer = '${obj.answer}' where id = ${obj.Id} `;
    db.insertOrUpdate(query)
        .then(data => res.status(200).send('record updated successfully'))
        .catch(err => res.status(501).send(err));
})

router.delete('/:id', (req, res) => {
    var query = "delete from tblFaq where id = " + req.params.id;
    db.executeDelete(query)
        .then(data => res.status(200).send('record deleted successfully'))
        .catch(err => res.status(501).send(err));
})

router.get('/:id', (req, res) => {
    var query = "select * from tblFaq where id = " + req.params.id;
    db.ExecuteSelectQuery(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
})

module.exports = router;
