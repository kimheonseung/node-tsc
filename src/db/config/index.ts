import dotenv from 'dotenv';
dotenv.config();
export const config = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_SCHEMA || 'devh',
    host: process.env.DB_HOST || 'localhost',
		port: process.env.DB_PORT || 3306,
    dialect: "mysql"
  },
}