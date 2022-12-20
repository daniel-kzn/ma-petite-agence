import { Express } from 'express';
import expressPlugin from './express.plugin';
import routeurLoader from './router.plugin';
import cors from 'cors';

export default async ( app: Express ): Promise<void> => {
  app = await expressPlugin(app);
  console.log('Express Intialized');

  await routeurLoader(app, cors);
  console.log('Routeur Intialized');
};
