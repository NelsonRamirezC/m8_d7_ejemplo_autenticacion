const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario.model.js");

const login = async (req, res) => {
    try {
        let {email, password} = req.body;



        let usuario = await Usuario.findOne({
            where: {
                email
            },
            attributes: ["id", "nombre", "apellido", "email", "password"]
        });

        if(!usuario){
            return res.status(401).json({code: 401, message: "Usuario o contraseña inválidos, verifique las credenciales."});
        };

        
        usuario = usuario.toJSON();

        //inicio proceso comparación hash con password
        const result = await bcrypt.compare(password, usuario.password);
        if(!result){
            return res.status(401).json({code: 401, message: "Usuario o contraseña inválidos, verifique las credenciales."});
        }

        //fin proceso comparación hash con password

        const token = jwt.sign(usuario, process.env.SECRET_TOKEN);

        res.json({code: 200, message: "login ok", token, usuario});
    } catch (error) {
        console.log(error);
        res.status(500).json({code: 500, message: "error en proceso de login."});
    }
};


module.exports = {
    login
}