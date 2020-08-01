/* eslint-disable max-len */
/* eslint-disable indent */
import database from '../../database/cars.json';

import sortCarsByMilesPerGallon from './utils/sortCarsByMilesPerGallon';

interface IndexConfig {
  page: number;
  length: number;
}

class CarsController {
  index({ page, length } : IndexConfig) {
    let filteredCars = database.sort(

      (a, b) => sortCarsByMilesPerGallon(a as unknown as Car, b as unknown as Car),

    );

    const numberOfPages = Math.floor(filteredCars.length / length);

    filteredCars = filteredCars.slice(length * page, length * (page + 1));

    return { filteredCars, pages: numberOfPages };
  }
}

export default new CarsController();
