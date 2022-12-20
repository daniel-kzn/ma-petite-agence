// import calculatorRoutes from '../modules/user/user.route';
import { Express, Request, Response } from 'express';
import { CorsOptions, CorsRequest, CorsOptionsDelegate } from 'cors';

export default async (app: Express, cors: <T extends CorsRequest = CorsRequest>(options?: CorsOptions | CorsOptionsDelegate<T> | undefined) => (req: T, res: { statusCode?: number | undefined; setHeader(key: string, value: string): any; end(): any; }, next: (err?: any) => any) => void) => {
  // app.use('/user', cors(), calculatorRoutes);

  app.use('*', (req: Request, res: Response) => {
    res
      .status(404)
      .send({ 'bad-request 404': 'The requested route is not implemented' });
  });
};
