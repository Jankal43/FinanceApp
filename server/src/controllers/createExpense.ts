const Expanse = require('../models/expense');

export async function createExpensesController(req: any, res: any) {
    try {
        const { emoji, description, date, price } = req.body;

        if (!emoji || emoji.length === 0) {
            return res.status(400).json({ message: 'Emoji is required' });
        }
        if (!description || description.length === 0) {
            return res.status(400).json({ message: 'Description is required' });
        }
        if (!price || typeof price !== 'number' || price <= 0) {
            return res.status(400).json({ message: 'Price must be a positive number' });
        }
        if (!date || !isValidDate(date)) {
            return res.status(400).json({ message: 'Valid date is required' });
        }

        const formattedDate = formatToDDMMYYYY(date);

        const expense = new Expanse({
            emoji: emoji,
            description: description,
            date: formattedDate,
            price: price,
        });

        const newExpense = await expense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

function isValidDate(date: string): boolean {
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/; // DD-MM-YYYY
    return dateRegex.test(date);
}


function formatToDDMMYYYY(date: string): string {
    const [day, month, year] = date.split('-').map(Number);
    return `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`;
}
