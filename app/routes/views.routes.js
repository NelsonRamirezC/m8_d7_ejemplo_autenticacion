const express = require('express');
const router = express.Router();
const viewsControllers = require("../controllers/views.controllers.js")


router.get('/', viewsControllers.viewHome);

module.exports = router;