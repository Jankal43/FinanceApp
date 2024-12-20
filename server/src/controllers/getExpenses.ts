// import Expanse from "../models/expense"
const Expense = require('../models/expense')

export async function getExpensesController(req: any, res: any) {
    try {
        const result = await Expense.find()
        console.log(result)

        res.status(200).json({
            message: "expenses retrieved",
            expenses: result
        });

    } catch (error) {
        res.status(500).json({error: error.toString()});
    }
}
