const express = require("express");
const cors = require("cors");
const compoundRoute = require("./routes/compoundRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "2mb", extended: true }));


app.use("/api", compoundRoute);

module.exports = app;
