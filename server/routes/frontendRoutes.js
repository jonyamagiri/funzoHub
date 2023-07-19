const express = require('express');
const router = express.Router();
const frontendController = require('../controllers/frontendController');
const cookieJwtAuth = require('../middleware/cookieHandler');



/**
 * frontend routes 
*/

// GET routes
router.get('/loginPage', frontendController.loginPage);
router.get('/signUpPage', frontendController.signUpPage);
router.get('/logout', frontendController.logout);
router.get('/', frontendController.homepage); // acts as landing page, user to get feel of site
router.get('/about', frontendController.about); // acts as landing page, user to get feel of site
router.get('/donate', cookieJwtAuth, frontendController.donate);
router.get('/categories', cookieJwtAuth, frontendController.exploreCategories);
router.get('/course/:id', cookieJwtAuth, frontendController.exploreCourse);
router.get('/categories/:id', cookieJwtAuth, frontendController.exploreCategoriesById);
router.get('/explore-latest', cookieJwtAuth, frontendController.exploreLatest);
router.get('/explore-random', cookieJwtAuth, frontendController.exploreRandom);
router.get('/submit-course', cookieJwtAuth, frontendController.submitCourse);


// POST routes
router.post('/search', cookieJwtAuth, frontendController.searchCourse);
router.post('/submit-course', cookieJwtAuth, frontendController.submitCoursePost);
router.post('/loginPage', frontendController.loginPagePost);
router.post('/signUpPage', frontendController.signUpPagePost);

module.exports = router;
