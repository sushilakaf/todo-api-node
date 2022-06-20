import typeorm from 'typeorm';
import { env } from './env.js';
import {Todo} from '../entity/Todo.js';

export const dataSource = new typeorm.DataSource({
    type: "postgres",
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    synchronize: env.NODE_ENV === "development",
    entities: [Todo],
    migrations: ["src/migrations/**/*.js"],
});