import { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';

export default async (app: Express): Promise<Express> => {
  app.use(cors());
  app.use(
    morgan('combined', {
      skip(req: Request, res: Response): boolean {
        return res.statusCode < 400;
      },
    })
  );
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  return app;
};
