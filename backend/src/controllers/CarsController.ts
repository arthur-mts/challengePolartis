/* eslint-disable max-len */
/* eslint-disable indent */
import database from '../../database/cars.json';

import sortCarsByMilesPerGallon from './utils/sortCarsByMilesPerGallon';

interface IndexConfig {
  page: number;
  max: number;
}

class CarsController {
  index({ page, max } : IndexConfig) {
    let filterByConsume = database.sort(

      (a, b) => sortCarsByMilesPerGallon(a as unknown as Car, b as unknown as Car),

    );

    filterByConsume = filterByConsume.slice(max * page, max * (page + 1));

    return filterByConsume;
  }
}

export default new CarsController();
