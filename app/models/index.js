const Direccion = require("./Direccion.model.js");
const Usuario = require("./Usuario.model.js");

//RELACIÓN 1 A 1 ENTRE USARIO Y DIRECCION
Usuario.hasOne(Direccion,{
    foreignKey: {
        name:"id_usuario",
        unique:true
    },
    as: "direccion"
});
Direccion.belongsTo(Usuario, {
    foreignKey: "id_usuario",
    as: "usuario"
});


module.exports = {
    Usuario,
    Direccion
}
