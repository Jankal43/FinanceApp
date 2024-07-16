import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import tagsRouter from './routes/tags';
import expensesRouter from './routes/expenses';
import cors from 'cors';

async function start() {
  try {
    const app = express();

    
    app.use(cors({
      origin: 'http://localhost:3000' // Zmień na odpowiednie pochodzenie, z którego będą pochodzić żądania
    }));


    const mongo = await MongoClient.connect('mongodb://localhost:27017/FinanceApp');

    await mongo.connect();

    // Type assertion to add db property to app
    (app as any).db = mongo.db();

    // body parser
    app.use(bodyParser.json({
      limit: '500kb'
    }));

    // Routes
    app.use('/tags', tagsRouter);
    app.use('/expenses', expensesRouter);

    // Start server
    app.listen(8080, () => {
      console.log('Server is running on port 8080');
    });
  } catch (error) {
    console.log(error);
  }
}

start();
