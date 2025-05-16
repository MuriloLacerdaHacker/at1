import { useState } from "react";

export function App() {
  const [numero, setNumero] = useState(100);
  const [mostrarEsconder, setMostrarEsconder] = useState(false);

  function handleAcresentar(){
    setNumero(numero + 100)
  }

  function handleMostrarEsconderParagrafo(){
    MostrarEsconder ? setMostrarEsconder(false) : setMostrarEsconder(true)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Atividade useState</h1>
      

      <div>
        <h2>Número: {numero}</h2>
        <button onClick={handleAcresentar}>Acresentar 100</button>
      </div>
      <div>
        <h2>o paragrafo sumidouro</h2>
        {mostrarEsconder ?  <p>em breve irei sumir</p>: "" }
      </div>
      </div>
  );
}





export default App;
