import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './db/models';

dotenv.config();

const SERVER_PORT: number = parseInt(process.env.SERVER_PORT as string, 8000) || 8000;
const bodyParserOption = {
  limit: "20mb",
  extended: true,
}

const app = express();
app.use(express.json(bodyParserOption));
app.use(express.urlencoded(bodyParserOption));
app.use(cors());


app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome!');
});

sequelize.authenticate()
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log(
      "################################################\n" +
      `🛡️  Database server connected: ${sequelize.getDialect()} - ${sequelize.config.host}:${sequelize.config.port}/${sequelize.config.database} 🛡️\n` +
      `🛡️  Server listening on port: ${SERVER_PORT} 🛡️\n` +
      "################################################");
    });
  })
  .catch((e: Error) => {
    console.error("Exception while Database connection: " + e.message);
  });
