const express = require('express');
const router = express.Router();
const userControllers = require("../controllers/user.controllers.js")


router.get('/', userControllers.findAllUsuarios);

router.post('/', userControllers.addUsuario)


module.exports = router;