// src/types/express.d.ts

import {Db} from 'mongodb';

declare global {
    namespace Express {
        interface Application {
            db?: Db;
        }
    }
}
