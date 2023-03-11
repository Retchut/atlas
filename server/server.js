require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const seedDB = require("./scripts/seedUtils.js");

// start express app
const app = express();
app.use(cors());
app.use(express.json());
app.use("/storage", express.static("storage"));

// mongoose
mongoose.connect(process.env.DBURL + "atlas", { useNewUrlParser: true });
const conn = mongoose.connection;
conn.on("error", (error) => console.log(error));
conn.once("open", () => {
  console.log("Connected to the database");
});
seedDB(conn);

// routes
const atlasRouter = require("./routes/atlas");
app.use("/atlas", atlasRouter);

// start listening
app.listen(process.env.APPPORT, () => console.log("Started Server"));
