import './App.css';
import Texto from "./componentes/textocolor/texto"
import Button from "./componentes/button/button"

function App() {
  return (
    <>
      <Texto cor="red" texto="Olá Mundo! Boraaaa!"/>
      <Button label="Saiba mais"/>
    </>
  );
}

export default App;
