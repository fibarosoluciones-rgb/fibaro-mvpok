
export function recomendar(tarifas: any[]) {
  return tarifas.sort((a, b) => a.precio - b.precio)[0];
}
