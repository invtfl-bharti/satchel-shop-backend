const express = require('express');
const path = require('path');
const app = express();


app.get("/", function (req, res) {
    res.send("Hey");
})

app.listen(3000);