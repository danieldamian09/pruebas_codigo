import React from "react";
import "./style.css";

export default function App() {

  function SaludarEnIdiomas ({idioma}){
    if(idioma === 'es') return <span>Hola</span>
    if(idioma === 'en') return <span>Hello</span>
  }

  const Saludar = () =>{
    const condicional = 'else'
    return (
      <div>
      <h2><DesdeOtroComponente /></h2>
        {
          condicional === 'if' && <p>Esto es un condicional if</p>
        }
        {
           condicional ===  'else' && <p>Esto es un condicional else</p>
        }
      
      </div>
    )
  }

  const DesdeOtroComponente = () =>{
    const nombre = 'humberto'
    return <p> <SaludarEnIdiomas idioma={'en'} /> desde otro componente enviado por {`${nombre} :)`}</p>
  }


  return (
    <div>
      <Saludar />
    </div>
  );
}
