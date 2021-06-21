// get the client
const mysql = require("mysql2");

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "shoe_store",
  waitForConnections: true,
  connectionLimit: 500,
  queueLimit: 0
});

class Query {
  static exec(query, escapeValues) {
    return new Promise(function(resolve, reject) {
      pool.query(query, escapeValues || [], function(err, rows, fields) {
        if (err) {
          console.log(err);
          return reject(err);
        }
        return resolve(rows, fields);
      });
    });
  }
}

module.exports = Query;
