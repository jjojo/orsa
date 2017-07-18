var http = require("http")
var express = require("express")
var app = express()

var port = process.env.PORT || 3100

app.get('/', function (req, res) {
  app.use(express.static(__dirname + "/orsa-score/dist"))
  res.redirect('index.html')
});

var server = http.createServer(app)
server.listen(port, function () {
  console.log("||||||||||||||||||||||||||||||||||||||||||");
  console.log("||                                      ||");
  console.log("||    STARTING SERVER ON PORT ",port,"    ||");
  console.log("||                                      ||");
  console.log("||||||||||||||||||||||||||||||||||||||||||");
})


