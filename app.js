require("dotenv").config(); // Load environment variables
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash");
const db = require("./config/mongoose-connection");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const indexRouter = require("./routes/index");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  "/satchel-shop-backend",
  express.static(path.join(__dirname, "public"))
);

// Validate session secret
if (!process.env.EXPRESS_SESSION_SECRET) {
  throw new Error("EXPRESS_SESSION_SECRET is not defined.");
}

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

app.use(flash());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/", indexRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
