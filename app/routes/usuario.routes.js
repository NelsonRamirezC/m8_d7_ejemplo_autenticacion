const express = require('express');
const router = express.Router();
const userControllers = require("../controllers/user.controllers.js");
const verificarToken = require("../middlewares/jwtVerify.js");


router.get('/', userControllers.findAllUsuarios);

router.post('/', userControllers.addUsuario);

router.delete('/', verificarToken, userControllers.eliminarUsuario);


module.exports = router;