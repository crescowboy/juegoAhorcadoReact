import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Portada = () => {
    const navegacion = useNavigate();
    return (
      <>
        <div className="juego">
          <div className="bienvenido">BIENVENIDO</div>
          <button className="botonJugar" onClick={() => navegacion("/juego")}>
            Jugar
          </button>
        </div>
      </>
    );
    
}
