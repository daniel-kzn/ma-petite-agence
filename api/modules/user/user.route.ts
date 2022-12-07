import express, { Router, Request, Response } from 'express';

import { createUser } from './user.controller';

const router: Router = express.Router();

router.route('/').post(async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const response = await createUser(userData);
    return res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

export default router;
