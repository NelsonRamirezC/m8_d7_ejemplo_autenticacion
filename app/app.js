const express = require("express");

const app = express();


app.all("*", (req, res) => {
    res.status(404).json({code: 404, message: "Ruta no conocida."});
})

module.exports = app;