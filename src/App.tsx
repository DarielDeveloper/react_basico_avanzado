import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Button } from "./components";
//Ejemplo de componente inteligente, ya que tiene la lógica en este caso el useState
function App() {
  /* Momentos cuando se renderiza 
  1- Cuando se inicializa
  2- Cuando se cambia el estado
   */
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [errorSearch, setErrorSearch] = useState("");
  const loadingInfo = useCallback(
    (flag: boolean) => {
      setLoading(flag);
      console.log(loading);
    },
    [loading]
  );
  const contador = () => setCount((count) => count + 1);
  /* Ejemplo de useState */
  const [name, setName] = useState("Daniel");
  const changeName = () => {
    setName((name) => (name == "Daniel" ? "Dariel" : "Daniel"));
  };
  //Otro ejemplo de useEffect con async
  const searchInfoUser = useCallback(async () => {
    loadingInfo(true);
    try {
      const fetchUser = await fetch(`https://www.searchuser`);
      if (!fetchUser.ok) {
        throw new Error("Error de conexión");
      }
      const dataUser = await fetchUser.json();
      return dataUser;
    } catch (err) {
      setErrorSearch(err as string);
    } finally {
      loadingInfo(false);
    }
  }, [loadingInfo]);

  //Ejemplo de useEffect, en este caso para
  useEffect(() => {
    searchInfoUser();
  }, [searchInfoUser]);

  if (errorSearch) {
    return <>{errorSearch} </>;
  }
  if (loading) {
    return <>...Cargando </>;
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button label={`count ${count}`} parenMethod={contador}></Button>
        <Button label={`change name`} parenMethod={changeName} />
        <p>{name} </p>
      </div>
    </>
  );
}

export default App;
