import React from "react";
import "./style.css";

const nombres = [
  "Daniel",
  "Pedro",
  "Juan",
  "Luis"
]

//Funcion para obtner los nombres
/* 
function getNombres() {
  const listaNombres = [];
  for(let i = 0; i < nombres.length; i++){
    listaNombres.push(<li>{nombres[i]}</li>)
  }
  return listaNombres
}
*/

const Nombres = () => {
  return <ul>{
    nombres.map(nombre => <li>{nombre}</li>)
  }</ul>
}




export default Nombres;