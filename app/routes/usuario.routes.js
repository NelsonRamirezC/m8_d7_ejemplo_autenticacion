const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({code: 201, message:"Listado de usuarios."});
})

module.exports = router;