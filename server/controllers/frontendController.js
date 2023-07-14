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
    res.render('categories', { title: 'funzoHub - Categories', categories } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
} 


/**
 * GET /categories/:id
 * Categories by Id
*/
exports.exploreCategoriesById = async(req, res) => {
  try {
    let categoryId = req.params.id;
    const limitNumber = 20;
    const categoryById = await Course.find({'category': categoryId }).limit(limitNumber);
    res.render('categories', { title: 'funzoHub - Explore Categories', categoryById } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
} 



/**
 * GET /courses/:id
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


/**
 * GET /search
 * Search 
*/
exports.searchCourse = async(req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let course = await Course.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
    res.render('search', { title: 'funzoHub - Course', course } );
    // res.json(course);
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }    
} 


/**
 * GET /explore-latest
 * Explore Latest Courses
*/
exports.exploreLatest = async(req, res) => {
  try {
    const limitNumber = 20;
    const course = await Course.find({}).sort({_id: -1}).limit(limitNumber); 
    res.render('explore-latest', { title: 'funzoHub - Explore Latest', course } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
} 


/**
 * GET /explore-random
 * Explore Random Courses
*/
exports.exploreRandom = async(req, res) => {
  try {
    const count = await Course.find().countDocuments();
    const random = Math.floor(Math.random() * count);
    // checks random value; ensures that skip value is always >= 0
    if (random < 1) {
      random = 0;
    }
    const course = await Course.find().limit(3).skip(random - 1).exec();
    res.render('explore-random', { title: 'funzoHub - Explore Random', course });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error occurred' });
  }
};


/**
 * GET /submit-course
 * Submit a course
*/
exports.submitCourse = async(req, res) => {
try {
  res.render('submit-course', { title: 'funzoHub - Submit Course' });
} catch (error) {
  res.status(500).send({ message: error.message || 'Error occurred' });
}
};
