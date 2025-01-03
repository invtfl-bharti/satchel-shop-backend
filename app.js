const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");


app.get("/", function (req, res) {
    res.send("Hey");
})

app.listen(3000);