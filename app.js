const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mail = require(path.join(__dirname, "utils/mail"));
const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/query", (request, res) => {
    var data = "";
    request.on('data', (chunk) => {
        data += chunk;
    })
    request.on('end', () => {
        json = JSON.parse(data);
        var msgcr = require(path.join(__dirname, "utils/message"));
        var msgr = msgcr(json.name, json.subject, json.msg);
        mail(msgr["subject"], msgr["msg"], json.email);
    })
})

app.listen(process.env.PORT || 1234, (err) => {
    if (err) {
        throw err;
    }
    else {
        console.log("IEEE_MAIT SERVER STARTED");
    }
})