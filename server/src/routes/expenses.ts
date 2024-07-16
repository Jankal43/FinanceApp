import express from 'express';
import { createExpensesController } from '../controllers/createExpense';
import { getExpensesController } from '../controllers/getExpenses';

const expensesRouter = express.Router();

console.log('Expenses route');

expensesRouter.post('/', createExpensesController);
expensesRouter.get('/', getExpensesController);

export default expensesRouter;
