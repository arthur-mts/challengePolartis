/* eslint-disable consistent-return */
/* eslint-disable max-len */

import carsDatabase from '../../database/cars.json';

import sortCarsByMilesPerGallon from './utils/sortCarsByMilesPerGallon';

import regrigeratorsDatabase from '../../database/frostFree.json';

import sortRefrigeratorsByConsume from './utils/sortRefrigeratorsByConsume';

interface FilterConfig {
  page: number;
  limit: number;
  category: string;
}

interface Response {
  items: Array<unknown>;
  maxPages: number
}

class FilterController {
  index({ page, limit, category } : FilterConfig): Response | undefined {
    let sortedList;

    if (category === 'cars') {
      sortedList = carsDatabase.sort(
        (a, b) => sortCarsByMilesPerGallon(a as unknown as Car, b as unknown as Car),
      );
    }

    if (category === 'refrigerators') {
      sortedList = regrigeratorsDatabase.sort(
        (a, b) => sortRefrigeratorsByConsume(a as unknown as Refrigerator, b as unknown as Refrigerator),
      );
    }

    if (sortedList) {
      return {
        items: sortedList.slice(limit * page, limit * (page + 1)),
        maxPages: Math.floor(sortedList.length / limit),
      };
    }
  }
}

export default new FilterController();
