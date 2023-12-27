const Usuario = require("../models/Usuario.model.js");

const login = async (req, res) => {
    try {
        let {email, password} = req.body;

        let usuario = await Usuario.findOne({
            where: {
                email,
                password
            },
            attributes: ["id", "nombre", "apellido", "email"]
        });

        if(!usuario){
            return res.status(401).json({code: 401, message: "Usuario o contraseña inválidos, verifique las credenciales."});
        }

        let token; 
        
        res.json({code: 200, message: "login ok", token});
    } catch (error) {
        res.status(500).json({code: 500, message: "error en proceso de login."});
    }
};


module.exports = {
    login
}