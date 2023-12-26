const express = require("express");
const { create } = require("express-handlebars");
const path = require("path");
const fileUpload = require("express-fileupload");
const usuariosRoutes = require("./routes/usuario.routes.js")
const viewsRoutes = require("./routes/views.routes.js")


const app = express();

//MIDDLEWARES GENERALES
app.use(express.json());
app.use(fileUpload());


//CONFIGURACIÓN HANDLEBARS

const hbs = create({
	partialsDir: [
		path.resolve(__dirname, "./views/partials/"),
	],
});

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));


//RUTAS DE LA API
app.use("/api/v1/usuarios", usuariosRoutes);

//RUTAS DEL FRONTEND
app.use("/", viewsRoutes);

app.all("*", (req, res) => {
    res.status(404).json({code: 404, message: "Ruta no conocida."});
})

module.exports = app;