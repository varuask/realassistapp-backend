const express = require('express');
const router = express.Router();
const { burglaryData } = require('../controllers/burglary');
router.get('/data', burglaryData);

module.exports = router;
