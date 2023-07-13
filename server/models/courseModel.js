const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please enter course title']
    },
    description: {
        type: String,
        required: [true, 'please enter course description']
    },
    instructor: {
        type: String,
        required: [true, 'please enter instructor name']
    },
    topics: {
        type: Array,
        required: [true, 'please enter course topics']
    },
    category: {
        type: String,
        enum: ['Web Development', 'Information Technology', 'Health', 'Business', 'Mathematics', 'Social Sciences'],
        required: [true, 'please enter course image']
    },
    image: {
        type: String,
        required: [true, 'please upload an image']
    }    
},
{
    timestamps: true,
});

courseSchema.index({ name: 'text', description: 'text' });


module.exports = mongoose.model('Course', courseSchema);
