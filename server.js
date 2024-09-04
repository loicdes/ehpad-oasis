const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const options = {
  /*key: fs.readFileSync("/etc/letsencrypt/live/courscentresud.fr/privkey.pem"),
  cert: fs.readFileSync(
    "/etc/letsencrypt/live/courscentresud.fr/fullchain.pem"
  ),*/
};

const app = express();
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.json({ limit: "10mb", extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.get("/.well-known/acme-challenge/:file", function (req, res) {
  res.sendFile(
    path.join(__dirname + "/.well-known/acme-challenge/" + req.params.file)
  );
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

http.createServer(app).listen(8085);
https.createServer(options, app).listen(8551);

console.log("Cours centre sud started !");
