const express = require('express');
const router = express.Router();
const frontendController = require('../controllers/frontendController');

/**
 * server routes 
*/
router.get('/', frontendController.homepage);
router.get('/categories', frontendController.exploreCategories);


module.exports = router;
