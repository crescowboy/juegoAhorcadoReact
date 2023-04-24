import React, { useEffect, useState } from 'react'
import { PALABROS } from '../assets/palabros'

const Juego = () => {
    const [azar,setAzar] = useState(0);
    const [palabra,setPalabra] = useState([]);
    const [misLetras,setMisLetras] = useState([])
    useEffect(()=>{
        setAzar(Math.floor(Math.random()*PALABROS.length))
    },[])
    
    useEffect(()=>{
        setPalabra(PALABROS[azar].palabro.split(""))
    },[azar])

  return (
    <>
      <div className='pregunta'>{PALABROS[azar].pregunta}</div>
      <div className='palabra'>
        {palabra.map((letra,i)=>(
            misLetras.indexOf(letra)===-1
            ?
                <div className='palo' key={i}></div>
            : 
                <div className='palo' key={i}>{letra.toUpperCase()}</div>
        ))}
      </div>
      <div className='botones'></div>
      <div className='imagen'></div>
    </>
  )
}

export default Juego
