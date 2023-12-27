const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    try{
        let token = req.query.token;
        req.autenticado = false;

        if(!token){
            //si no existe token url, verificar si viene en el encabezado
            token = req.headers.authorization.split(" ")[1];
        }

        if(token){
            const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
            req.autenticado  = decoded;
        }
    }catch(error){
        console.log(error);
;   }finally{
        next();
    }
};

module.exports = verificarToken;
