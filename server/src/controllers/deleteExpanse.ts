import Expenses from "../routes/expenses";

const Expense = require('../models/expense');

export async function deleteExpenseController(req, res) {

    const {id} = req.params;
    console.log(id)
    try {
        if (!id) {
            return res.status(400).json({message: 'Expense ID is required'});
        }
        const deletedExpense = await Expense.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({message: 'Expense not found'});
        }
        res.status(200).json({message: 'Expense deleted successfully', deletedExpense});
    } catch (error) {
        console.error('Error deleting expense:', error);
        res.status(500).json({message: 'Failed to delete expense', error: error.message});
    }
}
