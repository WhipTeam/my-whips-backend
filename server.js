const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const garageRoutes = require("./routes/garageRoutes");
const garagesRoutes = require("./routes/garagesRoutes");
const signupRoute = require("./routes/userSignupRoute");

const methodOverride = require("method-override");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// load the env vars
require("dotenv").config();

// require database
require("./db/connection");

// mount middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride("_method"));

// mount routes
app.use("/garage", garageRoutes);
app.use("/garages", garagesRoutes);
app.use("/login", userRoutes);
app.use("/signup", signupRoute);

app.get("/", (req, res) => res.json("Welcome to My Whips!"));

module.exports = app;
