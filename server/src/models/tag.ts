import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
    emoji: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Tag', tagSchema);