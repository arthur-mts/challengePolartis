/* eslint-disable max-len */
/* eslint-disable indent */
import database from '../../database/frostFree.json';

import sortRefrigeratorsByConsume from './utils/sorrRefrigeratorsByConsume';

interface Refrigerator {
  MARCA: string;
  MODELO: string;
  REFRIG: string;
  STARS3: string;
  TOTAL: string;
  V127: string;
  V220: string;
  F127V: string;
  F220V: string;
  P127V: string;
  P220V: string;
}
// Veja se o Jhonatan consegue te ajudar de alguma forma. Mas o desafio é seu Ok?
// 1-Criar uma API que receba uma categoria ("Refrigerador"/ "Automovel").
// Necessário apenas um método com paginação retornando uma lista, recebe a categoria com parâmetro.
// 2-Criar uma App ou uma Web que consuma este método, indica a categoria
// e retorna 10 por página retornando o mais eficente para o menos eficiente.

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
