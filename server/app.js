var express = require("express");
var app = express();

app.listen(3000, () => {
  console.log("express server started in port 3000");
});

app.get("/", (req, res) => {
  res.send({ status: 200 });
});
