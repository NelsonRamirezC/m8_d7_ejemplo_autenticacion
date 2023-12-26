const app = require("./app/app.js");
require("dotenv").config();

const main = async() => {
    try {
        console.log("iniciando aplicación");
        app.listen(process.env.PORT, () => console.log("Servidor escuchando en puerto: ", process.env.PORT));
    } catch (error) {
        console.log("error al inicializar la aplicación", error)
    }

}

main();