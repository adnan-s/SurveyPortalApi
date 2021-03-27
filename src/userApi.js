const express = require('express');
const db = require('./db');
const router = express.Router();

router.post('/', (req, res) => {
    const obj = req.body;
    var query = `insert into tblUsers(email, password, role, active, firstname, lastname)
    values ('${obj.email}', '${obj.password}', '${obj.role}', 0, '${obj.firstName}', '${obj.lastName}')`;
    db.insertOrUpdate(query)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(501).send(err)
        });
})

router.get('/', (req, res) => {
    var query = "select userId, firstName, lastName, email, active, role from tblUsers";
    db.ExecuteSelectQuery(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
});

module.exports = router;