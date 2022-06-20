import express from 'express';
import { env } from './src/config/env.js';
import { router as todoRouter } from './src/routes/todo.route.js';
const app = express();


app.use('/api', todoRouter);


app.listen(env.SERVER_PORT, () => {
    console.log(`Server startd at port: ${env.SERVER_PORT}`);
})