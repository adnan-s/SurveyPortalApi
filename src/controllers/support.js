const db = require('./db');

const Insert = (req, res) => {
    const support = req.body;
    var query = `insert into tblSupport(Contact, ShortDesc, Description, Email, Phone, SkypeId, WebAddress)
    values ('${support.contact}', '${support.shortdesc}', '${support.description}', 
    '${support.email}', '${support.phone}','${support.skypeId}','${support.webAddress} ')`;
    db.insertOrUpdate(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
}

const Update = (req, res) => {
    const support = req.body;
    var query = `update tblSupport set = Contact = '${support.contact}', 
    ShortDesc = '${support.shortdesc}', 
    Description = '${support.description}', 
    Email = '${support.email}',  
    Phone = '${support.phone}', 
    SkypeId = '${support.skypeId}', 
    WebAddress = '${support.webAddress}', 
    WHERE Id = ${support.Id}`;
    db.insertOrUpdate(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
}

const Delete = (req, res) => {
    var query = `delete from tblSupport where id = ${req.params.id}`
    db.executeDelete(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
}

const GetAll = (req, res) => {
    var query = "select * from tblSupport";
    db.ExecuteSelectQuery(query)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(501).send(err));
}

const GetById = (req, res) => {
    var query = `select * from tblSupport where id = ${req.params.id}`
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
