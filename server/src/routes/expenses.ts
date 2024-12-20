import express from 'express';
import {createExpensesController} from '../controllers/createExpense';
import {getExpensesController} from '../controllers/getExpenses';
import {deleteExpenseController} from '../controllers/deleteExpanse';

const expensesRouter = express.Router();

console.log('Expenses route');

expensesRouter.post('/', createExpensesController);
expensesRouter.get('/', getExpensesController);
expensesRouter.delete('/:id', deleteExpenseController);

export default expensesRouter;

