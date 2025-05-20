import { useState } from "react";

export function App() {
  const [numero, setNumero] = useState(100);
  const [mostrarEsconder, setMostrarEsconder] = useState(false);

  function handleAcrescentar() {
    setNumero(numero + 100);
  }

  function handleMostrarOuEsconder() {
    setMostrarEsconder(!mostrarEsconder); // alterna entre true e false
  }

  return (
    <div>
      <h1>Atividade useState</h1>

      <div>
        <h2>Número: {numero}</h2>
        <button onClick={handleAcrescentar}>Acrescentar 100</button>
      </div>

      <div>
        <h2>O parágrafo sumidouro</h2>
        <button onClick={handleMostrarOuEsconder}>
          {mostrarEsconder ? "Esconder parágrafo" : "Mostrar parágrafo"}
        </button>

        {mostrarEsconder && <p>Em breve irei sumir</p>}
      </div>
    </div>
  );
}
export default App;