import { Router } from 'express';
import RefrigeratorController from '../controllers/RefrigeratorController';
import CarsController from '../controllers/CarsController';

const router = Router();

router.get('/refrigerators', (req, res) => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 0;
  const { filteredRefrigerators, pages } = RefrigeratorController.index({ page, length: limit });
  return res.json({
    limit, numberOfPages: pages, page, data: filteredRefrigerators,
  });
});

router.get('/cars', (req, res) => {
  const length = Number(req.query.max) || 10;
  const page = Number(req.query.page) || 0;
  const { filteredCars, pages } = CarsController.index({ page, length });
  return res.json({
    limit: length, numberOfPages: pages, page, data: filteredCars,
  });
});

export default router;
