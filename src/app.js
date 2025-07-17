const express = require("express");
const entityRoutes = require("./routes/entity.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("bienvenidos");
});

app.use("/entities", entityRoutes);

module.exports = app;
