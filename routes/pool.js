var mysql = require("mysql");
var pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Yash@123",
  database: "goodsdb",
  multipleStatements: true,
});
module.exports = pool;
