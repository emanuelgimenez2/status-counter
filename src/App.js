import "./App.css";
import React from "react";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import {useState} from "react";

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
   setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };
  const bajarContador = () => {
    setNumClics(numClics - 1);
  }

  return (
    <div className="App">
      <div className="titulo-contenedor">
        <h1>
          Contador
        </h1>
      </div>

    <div className="contendor">

        <Contador numClics={numClics} /> 
        

        <Boton 
        texto="Subir" 
        esBotonDeClic={true} 
        manejarClic={manejarClic} 

        />
        <Boton
          texto="Bajar"
          esBotonDeClic={false}
          manejarClic={bajarContador}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />

    </div>
    </div>
  );
}

export default App;
