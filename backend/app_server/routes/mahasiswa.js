var express = require('express');
var router = express.Router();

// Import Controller
const mahasiswas = require('../controllers/mahasiswa.js');
/* GET home page. */

router.get("/",mahasiswas.index);
router.post("/insert",mahasiswas.insert);

module.exports = router;