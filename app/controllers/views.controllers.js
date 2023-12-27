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


const viewLogin = (req, res) => {
    try{
        res.render("login");
    }catch(error){
        res.render("login", {
            error: "Error al cargar los datos."
        });
    }
}

const viewInfoUsuario = async (req, res) => {
    try{
        let id = req.params.id;

        let usuario = await Usuario.findByPk(id);
        usuario = usuario.toJSON();
        console.log(usuario);

        res.render("infoUsuario", {
            usuario
        });
    }catch(error){
        res.render("infoUsuario", {
            error: "Error al cargar los datos."
        });
    }
}

module.exports = {
    viewHome,
    viewLogin,
    viewInfoUsuario 
}