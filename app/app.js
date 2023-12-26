const express = require("express");
const usuariosRoutes = require("./routes/usuario.routes.js")

const app = express();


//RUTAS DE LA APP
app.use("/api/v1/usuarios", usuariosRoutes);

app.all("*", (req, res) => {
    res.status(404).json({code: 404, message: "Ruta no conocida."});
})

module.exports = app;