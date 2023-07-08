const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

/**
 * server routes 
*/
router.get('/', courseController.homepage);

 
module.exports = router;
