const express = require('express');
const { getCourses, createCourse, getCourse, updateCourse, deleteCourse } = require('../controllers/courseController');
const router = express.Router();


router.route('/').get(getCourses);
router.route('/').post(createCourse);
router.route('/:id').get(getCourse);
router.route('/:id').put(updateCourse);
router.route('/:id').delete(deleteCourse);


module.exports = router;
