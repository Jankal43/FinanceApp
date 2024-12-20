import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
    emoji: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Expense', expenseSchema);
