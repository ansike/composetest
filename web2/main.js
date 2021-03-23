var express = require("express");
// var mysqlLink = require("./mysql-link.js");
var { setKey, getKey } = require("./redis-link.js");
var app = express();
let a = 1;

// redis和mysql连接成功
// compose部署执行成功
// 
app.get("/", async function (req, res) {
  await setKey("REDIS", a);
  a++
  res.send("Hello World!");
  // mysqlLink();
  const resd = await getKey('REDIS');
  console.log(resd);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
