const express = require("express");
const app = express();
const PORT = 4000;
const userRoutes = require("./routes/userRoutes");
const garageRoutes = require("./routes/garageRoutes");
const garagesRoutes = require("./routes/garagesRoutes");
const signupRoute = require("./routes/userSignupRoute");

const methodOverride = require("method-override");
const cors = require("cors");
const morgan = require("morgan");

// require database
require("./db/connection");

// mount middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mount routes
app.use("/garage", garageRoutes);
app.use("/garages", garagesRoutes);
app.use("/login", userRoutes);
app.use("/signup", signupRoute);

app.get("/", (req, res) => res.json("Welcome to My Whips!"));

app.listen(PORT, () => console.log("listening on", PORT));
