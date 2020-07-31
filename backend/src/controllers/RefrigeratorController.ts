/* eslint-disable max-len */
/* eslint-disable indent */
import database from '../../database/frostFree.json';

import sortRefrigeratorsByConsume from './utils/sortRefrigeratorsByConsume';

interface IndexConfig {
  page: number;
  max: number;
}

class ListController {
  index({ page, max } : IndexConfig) {
    let filterByConsume = database.sort(

      (a, b) => sortRefrigeratorsByConsume(a as unknown as Refrigerator, b as unknown as Refrigerator),

    );

    filterByConsume = filterByConsume.slice(max * page, max * (page + 1));

    return filterByConsume;
  }
}

export default new ListController();
