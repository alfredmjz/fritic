const express = require("express");
const cors = require("cors");
const restaurantsRouter = require("./controllers/restaurants.js");
const usersRouter = require("./controllers/users.js");
const app = express();

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/v1/restaurants", restaurantsRouter);
app.use("/api/v1/fritic/users", usersRouter);
module.exports = app;
