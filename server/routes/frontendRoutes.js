const express = require('express');
const router = express.Router();
const frontendController = require('../controllers/frontendController');

/**
 * server routes 
*/
router.get('/', frontendController.homepage);


module.exports = router;
