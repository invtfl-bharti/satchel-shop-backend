const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const expressSession = require("express-session");
const flash = require("connect-flash");
const indexRouter = require("./routes/index");

require("dotenv").config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  expressSession({
    secret: process.env.JWT_KEY, // Ensure this is properly set
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(flash());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Routes

app.use("/owners", ownersRouter);
app.use("/user", usersRouter);
app.use("/producrs", productsRouter);
app.use("/", indexRouter);

app.listen(3000);
