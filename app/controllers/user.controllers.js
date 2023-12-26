const Usuario = require("../models/Usuario.model.js");
const Direccion = require("../models/Direccion.model.js");

const findAllUsuarios = async (req, res) => {
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

        res.json({code: 200, message: "Usuarios encontrados con éxito", usuarios});
    } catch (error) {
        res.status(500).json({code: 500, message: "Error al mostrar los usuarios."});
    }
};


const addUsuario = async (req, res) => {
    try {
        let {nombre, apellido, email, password, calle, numeracion, comuna, ciudad} = req.body;

        let usuario = await Usuario.create({
            nombre, apellido, email, password,
            direccion: {
                calle, numeracion, comuna, ciudad
            }
          }, {
            include: {
                model: Direccion,
                as: "direccion"
            }
        });

        res.status(201).json({code: 201, message: "Usuario creado con éxito", usuario});
    } catch (error) {
        console.log(error);
        res.status(500).json({code: 500, message: "Error al crear al usuario."});
    }
};

module.exports = {
    findAllUsuarios,
    addUsuario
}