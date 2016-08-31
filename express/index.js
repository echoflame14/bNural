var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + "../"));
app.listen(3000, function(){
	console.log("listening on port", 3000);
});
