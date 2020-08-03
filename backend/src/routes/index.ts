import { Router } from 'express';
import FilterController from '../controllers/FilterController';

const router = Router();

router.get('/filter/:category', (req, res) => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 0;
  const { category } = req.params;

  const controllerResponse = FilterController?.index({ category, limit, page });

  if (controllerResponse) {
    return res.json({
      page, limit, maxPages: controllerResponse.maxPages, items: controllerResponse.items,
    });
  }

  return res.status(404).json({ message: 'Invalid category' });
});

export default router;
