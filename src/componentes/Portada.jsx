import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Portada = () => {
    const navegacion = useNavigate();
  return (
    <>
    <div>BIENVENIDO</div>
    <button onClick={()=>navegacion("/juego")}>Jugar</button>
    </>
  )
}
