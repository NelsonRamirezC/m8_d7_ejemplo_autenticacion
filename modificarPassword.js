const db = require("./app/database/config.js");

const Usuario = require("./app/models/Usuario.model.js");
const bcrypt = require("bcrypt");


const cambiarPasswords = async () => {
    await db.sync();
    const [results, metadata] = await db.query('select * from "Usuarios" where LENGTH(password) < 30;');

    results.forEach(async (usuario) => {

        const salt = await bcrypt.genSalt(10);
        const cryptedPassword = await bcrypt.hash(usuario.password, salt);

        let userDB = await Usuario.findByPk(usuario.id);
        userDB.password = cryptedPassword;
        await userDB.save();
    });

};

cambiarPasswords()