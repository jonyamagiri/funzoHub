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
    //console.log(req.body);
    const { title, description, instructor, topics, category, image } = req.body;
    if (!title || !description || !instructor || !topics || !category || !image ) {
        res.status(400);
        throw new Error('All fields are required!');
    }
    // Check if the course already exists
    const existingCourse = await Course.findOne({ title });
    if (existingCourse) {
        res.status(400);
        throw new Error('A course with this title already exists!');
    }
    const course = await Course.create({
        title, description, instructor, topics, category, image
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
    const course = await Course.findById(req.params.id);
    if (!course) {
        res.status(404);
        throw new Error('Course not found');
    }
    const updatedCourse = await Course.findByIdAndUpdate(
        req.params.id, req.body,
        { new: true}
    );
    res.status(200).json(updatedCourse);
});

//@desc delete a course
//@route DELETE /api/courses/:id
//@access public
const deleteCourse = asyncHandler(async(req, res) => {
    const course = await Course.findById(req.params.id);
    if (!course) {
        res.status(404);
        throw new Error('Course not found');
    }
    const deletedCourse = await Course.deleteOne( {_id: req.params.id});
    res.status(200).json(deletedCourse);
});



module.exports = { getCourses, createCourse, getCourse, updateCourse, deleteCourse };
