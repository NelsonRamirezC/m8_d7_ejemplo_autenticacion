const app = require("./app/app.js");
const db = require("./app/database/config.js");
require("./app/models/index.js");
require("dotenv").config();

const main = async() => {
    try {
        console.log("iniciando aplicación");
        await db.sync({force: false, alter: false});
        app.listen(process.env.PORT, () => console.log("Servidor escuchando en puerto: ", process.env.PORT));
    } catch (error) {
        console.log("error al inicializar la aplicación", error)
    }

}

main();