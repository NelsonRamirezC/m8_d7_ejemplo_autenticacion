const express = require('express');
const router = express.Router();
const loginControllers = require("../controllers/login.controllers.js")

router.post('/', loginControllers.login);


module.exports = router;