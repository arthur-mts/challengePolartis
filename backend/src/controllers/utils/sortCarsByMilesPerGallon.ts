export default function sortCarsByMilesPerGallon(a: Car, b: Car) {
  if (!a.Miles_per_Gallon) return 1;
  return a.Miles_per_Gallon < b.Miles_per_Gallon ? 1 : -1;
}
