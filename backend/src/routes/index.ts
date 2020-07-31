import { Router } from 'express';
import RefrigeratorController from '../controllers/RefrigeratorController';

const router = Router();

router.get('/refrigerators', (req, res) => {
  const { max = 10, page = 1 } = req.query;
  const refrigerators = RefrigeratorController.index({ page: Number(page), max: Number(max) });
  return res.json(refrigerators);
});

export default router;
