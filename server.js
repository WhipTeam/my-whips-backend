const express = require("express");
const app = express();
const PORT = 3000;
const userRoutes = require("./routes/userRoutes");
const garageRoutes = require("./routes/garageRoutes");

const methodOverride = require("method-override");
const cors = require("cors");
const morgan = require("morgan");
const { urlencoded } = require("express");

// require database
require("./db/connection");

// mount middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mount routes
app.use("/garage", garageRoutes);
app.use("/login", userRoutes);

app.get("/", (req, res) => res.json("Welcome to My Whips!"));

app.listen(PORT, () => console.log("listening on", PORT));
