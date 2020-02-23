const express = require ("express");
const cors = require ("cors");
const serverlessHttp = require ("serverless-http");
const bodyParser = require("body-parser");
const destinations = require("./destinations.json");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/destinations/:city_key", function(req, res) {
  const city_key = req.params.city_key;
  var data_filter = destinations.filter(element => element.city_key === city_key);
  res.json(data_filter);
});

module.exports.app = serverlessHttp(app);