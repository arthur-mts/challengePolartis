/* eslint-disable max-len */
/* eslint-disable indent */
import database from '../../database/frostFree.json';

import sortRefrigeratorsByConsume from './utils/sortRefrigeratorsByConsume';

interface IndexConfig {
  page: number;
  length: number;
}

class ListController {
  index({ page, length } : IndexConfig) {
    let filteredRefrigerators = database.sort(

      (a, b) => sortRefrigeratorsByConsume(a as unknown as Refrigerator, b as unknown as Refrigerator),

    );

    const numberOfPages = Math.floor(filteredRefrigerators.length / length);

    filteredRefrigerators = filteredRefrigerators.slice(length * page, length * (page + 1));

    return { filteredRefrigerators, pages: numberOfPages };
  }
}

export default new ListController();
