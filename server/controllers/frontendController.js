require('../utils/db');
const Category = require('../models/categoryModel');
const Course = require('../models/courseModel');


/**
 * GET /
 * Homepage 
*/
exports.homepage = async(req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Course.find({}).sort({_id: -1}).limit(limitNumber);
    const info_tech = await Course.find({ 'category': 'Information Technology' }).limit(limitNumber);
    const maths = await Course.find({ 'category': 'Mathematics' }).limit(limitNumber);
    const health = await Course.find({ 'category': 'Health' }).limit(limitNumber);

    const subject = { latest, info_tech, maths, health };

    res.render('index', { title: 'funzoHub - Home', categories, subject } );
    //res.render('index', { title: 'funzoHub - Home', categories, latest, info_tech, maths, health } );    
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
}


/**
 * GET /categories
 * Categories 
*/
exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', { title: 'funzoHub - Categoreis', categories } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
} 


/**
 * GET /courses
 * Courses 
*/
exports.exploreCourse = async(req, res) => {
  try {
    //const limitNumber = 20;
    let courseId = req.params.id;
    const course = await Course.findById(courseId);
    res.render('course', { title: 'funzoHub - Course', course } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
} 

