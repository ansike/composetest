var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "docker",
});

connection.connect();
function getData() {
  connection.query("select * from role", function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
  // connection.end();
}

module.exports = getData;
