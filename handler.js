const express = require ("express");
const cors = require ("cors");
const serverlessHttp = require ("serverless-http");
const bodyParser = require("body-parser");
const destinations = require("./destinations.json");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/destinations/:city", function(req, res) {
  const city = req.params.city;
  var data_filter = destinations.filter(element => element.city === city);
  res.json(data_filter);
});

module.exports.app = serverlessHttp(app);