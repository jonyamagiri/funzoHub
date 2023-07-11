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
    //const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
    //const thai = await Recipe.find({ 'category': 'Thai' }).limit(limitNumber);
    //const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
    //const chinese = await Recipe.find({ 'category': 'Chinese' }).limit(limitNumber);

    //const food = { latest, thai, american, chinese };

    res.render('index', { title: 'Cooking Blog - Home', categories } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
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
    res.render('categories', { title: 'Cooking Blog - Categoreis', categories } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 



