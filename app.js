const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");
const db = require("./config/mongoose-connection");
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');

require("dotenv").config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");


// Routes

app.use("/", ownersRouter);
app.use("/", usersRouter);
app.use("/", productsRouter);



app.listen(3000);