const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/my-whips";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
  })
  .then((instance) => {
    console.log(`connected on ${instance.connections[0]}`);
  })
  .catch((err) => console.log(`ERROR: See details, ${err}`));
