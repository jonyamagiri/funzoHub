const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');

//@desc get all categories
//@route GET /api/categories
//@access public
const getCategories = asyncHandler(async(req, res) => {
    const category = await Category.find();
    res.status(200).json(category);
});

//@desc create a new category
//@route POST /api/categories
//@access public
const createCategory = asyncHandler(async(req, res) => {
    //console.log(req.body);
    const { name, image } = req.body;
    if (!name || !image ) {
        res.status(400);
        throw new Error('All fields are required!');
    }
    // Check if the category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
        res.status(400);
        throw new Error('A category with this name already exists!');
    }
    const category = await Category.create({
        name, image
    });
    res.status(201).json(category);
});

//@desc get a single category
//@route GET /api/categories/:id
//@access public
const getCategory = asyncHandler(async(req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        res.status(404);
        throw new Error('Category not found');
    }
    res.status(200).json(category);
});

//@desc update a category
//@route PUT /api/categories/:id
//@access public
const updateCategory = asyncHandler(async(req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        res.status(404);
        throw new Error('Category not found');
    }
    const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id, req.body,
        { new: true}
    );
    res.status(200).json(updatedCategory);
});

//@desc delete a category
//@route DELETE /api/categories/:id
//@access public
const deleteCategory = asyncHandler(async(req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        res.status(404);
        throw new Error('Category not found');
    }
    const deletedCategory = await Category.deleteOne( {_id: req.params.id});
    res.status(200).json(deletedCategory);
});



module.exports = { getCategories, createCategory, getCategory, updateCategory, deleteCategory };
