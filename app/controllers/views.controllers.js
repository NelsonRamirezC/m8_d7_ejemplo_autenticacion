const Usuario = require("../models/Usuario.model.js");
const Direccion = require("../models/Direccion.model.js");

const viewHome = async (req, res) => {
    try {
        let usuarios = await Usuario.findAll({
            attributes: {
                exclude: ["password"]
            },
            include: {
                model: Direccion,
                as: "direccion",
                attributes : ["calle", "numeracion", "comuna", "ciudad"]
            }

        });

        usuarios = usuarios.map(usuario => usuario.toJSON());

        res.render("home", {
            usuarios
        });
    } catch (error) {
        res.render("home", {
            error: "Error al mostrar los usuarios"
        });
    }
};

module.exports = {
    viewHome
}