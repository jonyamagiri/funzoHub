

//@desc get all courses
//@route GET /api/courses
//@access public
const getCourses = (req, res) => {
    res.status(200).json({ message: 'get all courses'});
};

//@desc create a new course
//@route POST /api/courses
//@access public
const createCourse = (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: 'create a course'});
};

//@desc get a single course
//@route GET /api/courses/:id
//@access public
const getCourse = (req, res) => {
    res.status(200).json({ message: `get course for ${req.params.id}`});
};

//@desc update a course
//@route PUT /api/courses/:id
//@access public
const updateCourse = (req, res) => {
    res.status(200).json({ message: `update course for ${req.params.id}`});
};

//@desc delete a course
//@route DELETE /api/courses/:id
//@access public
const deleteCourse = (req, res) => {
    res.status(200).json({ message: `delete course for ${req.params.id}`});
};



module.exports = { getCourses, createCourse, getCourse, updateCourse, deleteCourse };
