export default function sortRefrigeratorsByConsume(a: Refrigerator, b: Refrigerator) {
  const consumeA = ((parseFloat(a.V127) + parseFloat(a.V220)) / 2) / parseFloat(a.TOTAL);
  const consumeB = ((parseFloat(b.V127) + parseFloat(b.V220)) / 2) / parseFloat(b.TOTAL);
  return consumeA < consumeB ? 1 : -1;
}
