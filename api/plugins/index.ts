import { Express } from 'express';
import expressPlugin from './express';

export default async ( app: Express ): Promise<void> => {
  await expressPlugin(app);
  console.log('Express Intialized');
};
