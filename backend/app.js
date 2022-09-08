const express = require("express");
const cors = require("cors");
const restaurantRouter = require("./controllers/restaurant.js");
const app = express();

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/v1/restaurants", restaurantRouter);
module.exports = app;
