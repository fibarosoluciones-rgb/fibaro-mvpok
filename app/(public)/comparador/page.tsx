
import tarifas from "../../../data/tarifas.sample.json";
import { recomendar } from "../../../lib/recommender";

export default function ComparadorPage() {
  const mejor = recomendar(tarifas);
  return (
    <main style={{padding:20}}>
      <h1>Comparador de tarifas</h1>
      <pre>{JSON.stringify(tarifas, null, 2)}</pre>
      <h2>Recomendación: {mejor.nombre} ({mejor.precio}€/mes)</h2>
    </main>
  );
}
