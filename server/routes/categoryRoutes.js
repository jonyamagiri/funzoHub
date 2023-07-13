const express = require('express');
const { getCategories, createCategory, getCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');
const router = express.Router();


router.route('/').get(getCategories);
router.route('/').post(createCategory);
router.route('/:id').get(getCategory);
router.route('/:id').put(updateCategory);
router.route('/:id').delete(deleteCategory);


module.exports = router;
