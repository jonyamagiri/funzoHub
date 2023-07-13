const express = require('express');
const router = express.Router();
const frontendController = require('../controllers/frontendController');

/**
 * server routes 
*/
router.get('/', frontendController.homepage);
router.get('/categories', frontendController.exploreCategories);
router.get('/course/:id', frontendController.exploreCourse);
router.get('/categories/:id', frontendController.exploreCategoriesById);
router.post('/search', frontendController.searchCourse);
router.get('/explore-latest', frontendController.exploreLatest);
router.get('/explore-random', frontendController.exploreRandom);


module.exports = router;
