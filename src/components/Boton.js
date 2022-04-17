import React from 'react'
import "./estilos/Boton.css"

export default function Boton({texto, esBotonClic, manejarClic}) {
  return (
    <div>
        <button className={esBotonClic ? 'boton-clic' : 'boton-reiniciar'}
       onClick={manejarClic}>
        {texto}
        
        </button>
    </div>
  )
}
