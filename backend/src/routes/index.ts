import { Router } from 'express';
import RefrigeratorController from '../controllers/RefrigeratorController';
import CarsController from '../controllers/CarsController';

const router = Router();

router.get('/refrigerators', (req, res) => {
  const max = Number(req.query.max) || 10;
  const page = Number(req.query.page) || 0;
  const refrigerators = RefrigeratorController.index({ page, max });
  return res.json({ max, page, refrigerators });
});

router.get('/cars', (req, res) => {
  const max = Number(req.query.max) || 10;
  const page = Number(req.query.page) || 0;
  const cars = CarsController.index({ page, max });
  return res.json({ max, page, cars });
});

export default router;
