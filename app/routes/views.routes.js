const express = require('express');
const router = express.Router();
const viewsControllers = require("../controllers/views.controllers.js")


router.get('/', viewsControllers.viewHome);

router.get('/login', viewsControllers.viewLogin);

router.get('/infoUsuario/:id', viewsControllers.viewInfoUsuario);


module.exports = router;