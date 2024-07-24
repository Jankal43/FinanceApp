// import { ObjectId } from 'mongodb';
const { ObjectId } = require('mongodb');

export async function deleteExpenseController(req, res) {
    try {
        const { db } = req.app;
        const expenseId = req.params.id;

        // Sprawdź, czy ID jest prawidłowe i konwertuj na ObjectId
        if (!ObjectId.isValid(expenseId)) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const result = await db.collection('expenses').deleteOne({ _id: new ObjectId(expenseId) });

        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Expense deleted' });
        } else {
            res.status(404).json({ message: 'Expense not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}
