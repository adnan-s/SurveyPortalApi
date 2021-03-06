const sql = require('mssql');

const config = {
    server: process.env.DB_SERVER,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.DB_PASSWORD,
    port: +process.env.DB_PORT,
    options: {
        encrypt: false
    }
}

module.exports = {

    executeDelete: (query) => {
        return new Promise((resolve, reject) => {
            sql.connect(config).then(pool => {
                return pool.request().query(query);
            }).then(result => {
                sql.close();
                resolve('success');
            }).catch(err => {
                sql.close();
                reject(err);
            });
        })
    },
    
    ExecuteSelectQuery: (query) => {
        return new Promise((resolve, reject) => {
            sql.connect(config).then(pool => {
                return pool.request().query(query);
            }).then(result => {
                sql.close();
                resolve(result.recordset);
            }).catch(err => {
                sql.close();
                reject(err);
            });
        });
    },

    insertOrUpdate: (query) => {
        return new Promise((resolve, reject) => {
            sql.connect(config).then(pool => {
                return pool.request().query(query);
            }).then(result => {
                sql.close();
                resolve('success');
            }).catch(err => {
                sql.close();
                reject(err);
            });
        })
    },

    getDataSet: (query) => {
        return new Promise((resolve, reject) => {
            sql.connect(config).then(pool => {
                return pool.request().query(query);
            }).then(result => {
                sql.close();
                resolve(result.recordset);
            }).catch(err => {
                sql.close();
                reject(err);
            });
        });
    }
}