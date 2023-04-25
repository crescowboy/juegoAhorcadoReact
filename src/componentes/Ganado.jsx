import React from 'react'
import { useNavigate } from 'react-router-dom'

const Ganado = () => {
  const navegacion = useNavigate();
  const volver = ()=>{
    navegacion("/juego")
  }
  return (
    <>
      <h1>Muy bien has ganado!!</h1>
      <div className='imagen'>
        <img src={require(`../assets/el_ahorcado1.png`)} alt="" />
      </div>
      <button onClick={volver}>Volver a juegar</button>
    </>
  )
}

export default Ganado
