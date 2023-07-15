const express = require('express');
const router = express.Router();
const frontendController = require('../controllers/frontendController');

/**
 * frontend routes 
*/

// GET routes
router.get('/loginPage', frontendController.loginPage);
router.get('/signUpPage', frontendController.signUpPage);
router.get('/', frontendController.homepage);
router.get('/categories', frontendController.exploreCategories);
router.get('/course/:id', frontendController.exploreCourse);
router.get('/categories/:id', frontendController.exploreCategoriesById);
router.get('/explore-latest', frontendController.exploreLatest);
router.get('/explore-random', frontendController.exploreRandom);
router.get('/submit-course', frontendController.submitCourse);


// POST routes
router.post('/search', frontendController.searchCourse);
router.post('/submit-course', frontendController.submitCoursePost);
// router.post('/login', frontendController.login);
router.post('/signUpPage', frontendController.signUpPagePost);

module.exports = router;



