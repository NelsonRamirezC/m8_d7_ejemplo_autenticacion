const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({code: 200, message:"Listado de usuarios."});
})

module.exports = router;