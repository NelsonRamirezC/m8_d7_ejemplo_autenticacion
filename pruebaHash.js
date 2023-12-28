const bcrypt = require("bcrypt");

let passwordCifrado = "$2b$10$w7umvnvT0zztNMZA/0ygM.LjBVOpHowpHu7wZeEsuseZJHr7171fSs";
let passwordHash = "passHashSecreto";


const validarPassword = async () => {
    const res = await bcrypt.compare("123456", passwordCifrado);
    console.log(res);
}

validarPassword();
