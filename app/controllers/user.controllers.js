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

const eliminarUsuario = async (req, res) => {
    try {

        if(!req.autenticado){
            return res.status(401).json({code: 401, message: "Usted no tiene los permisos necesarios para eliminar la cuenta."})
        }

        //VERIFICAR SI EL USUARIO USUARIO ES EL MISMO QUE EL USUARIO QUE SE DESEA ELIMINAR

        let usuario = await Usuario.findByPk(req.autenticado.id);
        
        if(usuario){
            await usuario.destroy();
            res.status(200).json({code: 200, message: "usuario eliminado con éxito"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({code: 500, message: "Error al intentar eliminar un usuario."});
    }
};

module.exports = {
    findAllUsuarios,
    addUsuario,
    eliminarUsuario
}