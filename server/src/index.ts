import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import expensesRouter from './routes/expenses';
import tagsRouter from "./routes/tags";
import cors from 'cors';

dotenv.config();

const app = express();

mongoose.connect(process.env.atlas_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
// Enable CORS
    app.use(
        cors({
          origin: 'http://localhost:3000',
        })
    );

app.use('/expenses', expensesRouter);
app.use('/tags', tagsRouter);

app.listen(8080, () => console.log('Server Started'));
