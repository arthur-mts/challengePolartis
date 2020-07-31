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

export default function sortRefrigeratorsByConsume(a: Refrigerator, b: Refrigerator) {
  const consumeA = ((parseFloat(a.V127) + parseFloat(a.V220)) / 2);
  const consumeB = ((parseFloat(b.V127) + parseFloat(b.V220)) / 2);
  return consumeA < consumeB ? 1 : -1;
}
