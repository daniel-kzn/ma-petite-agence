import express, { Express } from 'express';
import plugins from './plugins/index.plugin';
import 'dotenv/config';

const startServer = async () => {
  const app: Express = express();

  await plugins(app);

  // app.listen(process.env.PORT, (err: any) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log(`Server running on port : ${process.env.PORT}`);
  // });

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port : ${process.env.PORT}`);
  }).on('error', (err: Error) => console.log(err));
};

startServer();
