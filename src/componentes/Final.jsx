import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../contexto/Contexto';

const Final = () => {
  const navegacion = useNavigate();
  const {lacorrecta} = useContext(Contexto);
  return (
    <>
      <h1>Vaya, has perdido</h1>
      <h2>La respuesta correcta era:{lacorrecta}</h2>
      <div className='imagen'>
        <img src={require(`../assets/el_ahorcado6.png`)} alt="" />
      </div>
      <button onClick={()=>navegacion("/juego")}>Volver a juegar</button>
    </>
  )
}

export default Final
