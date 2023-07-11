const asyncHandler = require('express-async-handler');
const Course = require('../models/courseModel');

//@desc get all courses
//@route GET /api/courses
//@access public
const getCourses = asyncHandler(async(req, res) => {
    const courses = await Course.find();
    res.status(200).json(courses);
});

//@desc create a new course
//@route POST /api/courses
//@access public
const createCourse = asyncHandler(async(req, res) => {
    console.log(req.body);
    const { title, description, category, image } = req.body;
    if (!title || !description || !category || !image) {
        res.status(400);
        throw new Error('All fields are required!');
    }
    const course = await Course.create({
        title, description, category, image
    });
    res.status(201).json(course);
});

//@desc get a single course
//@route GET /api/courses/:id
//@access public
const getCourse = asyncHandler(async(req, res) => {
    const course = await Course.findById(req.params.id);
    if (!course) {
        res.status(404);
        throw new Error('Course not found');
    }
    res.status(200).json(course);
});

//@desc update a course
//@route PUT /api/courses/:id
//@access public
const updateCourse = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `update course for ${req.params.id}`});
});

//@desc delete a course
//@route DELETE /api/courses/:id
//@access public
const deleteCourse = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `delete course for ${req.params.id}`});
});



module.exports = { getCourses, createCourse, getCourse, updateCourse, deleteCourse };
