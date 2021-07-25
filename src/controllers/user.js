var db = require('./db');
var bcrypt = require('bcrypt');

var Insert = async function (req, res) {
    var obj = req.body;
    var hashPassword = await bcrypt.hash(obj.password, 10);
    var hashRole = await bcrypt.hash(obj.role, 10);
    var query = `insert into tblUsers(email, password, role, active, firstname, lastname)
    values ('${obj.email}', '${hashPassword}', '${hashRole}', 0, '${obj.firstName}', '${obj.lastName}')`;
    db.insertOrUpdate(query)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var GetAll = function (req, res) {
    var query = 'select userId, firstName, lastName, email, active, role from tblUsers';
    db.ExecuteSelectQuery(query)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};

var getUserByEmail = function (email) {
    return new Promise(function (resolve, reject) {
        var query = `select * from tblUsers where email = '${email}'`;
        db.ExecuteSelectQuery(query)
        .then(function (data) {
                resolve(data[0]);
            })
            .catch(function (err) {
                console.log(err);
                reject(err);
            });
    });
};

var getUserById = function (id) {
    return new Promise(function (resolve, reject) {
        var query = `select * from tblUsers where UserId = '${id}'`;
        db.ExecuteSelectQuery(query)
            .then(function (data) {
                resolve(data[0]);
            })
            .catch(function (err) {
                reject(err);
            });

    });
};

module.exports = {
    insert: Insert,
    getAll: GetAll,
    findByEmail: getUserByEmail,
    findById: getUserById
};