import { useState } from "react";
import "./App.css";
import { Button } from "./components";
//Ejemplo de componente inteligente, ya que tiene la lógica en este caso el useState
function App() {
  /* Momentos cuando se renderiza 
  1- Cuando se inicializa
  2- Cuando se cambia el estado
   */
  const [count, setCount] = useState(0);
  const contador = () => setCount((count) => count + 1);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button label={`count is ${count}`} parenMethod={contador}></Button>
      </div>
    </>
  );
}

export default App;
