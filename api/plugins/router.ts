import calculatorRoutes from '../modules/user/user.route';

export default async (app, cors) => {
  app.use('/user', cors(), calculatorRoutes);

  app.use('*', (req, res) => {
    res
      .status(404)
      .send({ 'bad-request 404': 'The requested route is not implemented' });
  });
};
